import config from "../config/appwriteConfig.js";
import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.Client)


    }

    async createAccount({email, password , name}){
        try {
            const account = await this.account.create(ID.unique(), email, password, name)
            if(account){
                this.login({email, password}) // if user account created successfully just make login
            }
            return account
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }


    loginWithGoogle(){
        try {
                this.account.createOAuth2Session(
                OAuthProvider.Google,
                'http://localhost:5173/',
                'http://localhost:5173/'
            )
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            const userData = await this.account.get()
            return userData
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()
export default authService
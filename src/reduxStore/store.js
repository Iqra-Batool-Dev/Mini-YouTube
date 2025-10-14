import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reduxSlices/authSlice.js'
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage.js";


const persistedState = loadFromLocalStorage()
export const store =  configureStore ({
    reducer: {
        auth: authReducer
    },

    preloadedState:{
        auth: persistedState?.user || {authStatus : false, userData: null}
    }
})

store.subscribe(()=>{
    saveToLocalStorage({
        user: store.getState().auth
    })
})

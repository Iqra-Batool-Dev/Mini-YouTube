import {login as storeLogin} from '../reduxSlices/authSlice'
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
// import GoogleLogo from '../../public/svgs/icons8-google-40.svg'

function LoginWithGoogleBtn() {
    const dispatch = useDispatch()


    const login =async ()=>{
        try {
            authService.loginWithGoogle()
            const user = await authService.getCurrentUser()
            if(user){
                dispatch(storeLogin(user))
            }
        } catch (error) {
            throw error
        }
    }

    return (
    <div className='w-full'>
        <button className='w-full flex flex-row justify-center items-center gap-2 p-2 cursor-pointer text-blue-600 border-1 border-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white ' onClick={login}>
        <img src="/svgs/icons8-google-40.svg" alt="google" width='27px' />
        Login with Google
        </button>
    </div>
    )
}

export default LoginWithGoogleBtn 

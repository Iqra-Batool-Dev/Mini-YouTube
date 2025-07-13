import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reduxSlices/authSlice.js'

export const store =  configureStore ({
    reducer: {
        auth: authReducer
    }
})
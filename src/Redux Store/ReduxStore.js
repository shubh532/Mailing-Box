import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Authentication"

const Store=configureStore({
    reducer:{
        AuthReducer:AuthReducer
    }
})

export default Store
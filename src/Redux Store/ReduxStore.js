import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Authentication"
import SendReducer from "./SendMail";

const Store=configureStore({
    reducer:{
        AuthReducer:AuthReducer,
        SendReducer:SendReducer
    }
})

export default Store
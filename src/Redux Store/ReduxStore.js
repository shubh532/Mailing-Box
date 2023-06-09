import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Authentication"
import SendReducer from "./MailHandler";
import SideBarBtnFunc from "./SideBarBtnFunc";

const Store=configureStore({
    reducer:{
        AuthReducer:AuthReducer,
        SendReducer:SendReducer,
        SideBarBtnFunc:SideBarBtnFunc
    }
})

export default Store


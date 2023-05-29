import { createSlice } from "@reduxjs/toolkit";

const InitialState={receiveMail:[], Subject:null,Message:null, SendMails:[],UnReadMails:0}

const SendMialSlice=createSlice({
    name:"SendMail",
    initialState:InitialState,
    reducers:{
        GetReceivermail(state,action){
            state.receiveMail=action.payload
        },
        GetSubject(state,action){
            state.Subject=action.payload
        },
        GetMessage(state,action){
            state.Message=action.payload
        },
        GetSendMail(state,action){
            state.SendMails=action.payload
        },
        GetUnReadMails(state,action){
            state.UnReadMails=action.payload
        }
    }
})

export const SendMailActions=SendMialSlice.actions
export default SendMialSlice.reducer
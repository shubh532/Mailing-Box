import { createSlice } from "@reduxjs/toolkit";

const InitialState={receiverMail:null, Subject:null,Message:null}

const SendMialSlice=createSlice({
    name:"SendMail",
    initialState:InitialState,
    reducers:{
        GetReceivermail(state,action){
            state.receiverMail=action.payload
        },
        GetSubject(state,action){
            state.Subject=action.payload
        },
        GetMessage(state,action){
            state.Message=action.payload
        }
    }
})

export const SendMailActions=SendMialSlice.actions
export default SendMialSlice.reducer
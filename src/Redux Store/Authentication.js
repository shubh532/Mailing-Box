import { createSlice } from "@reduxjs/toolkit";


const email=localStorage.getItem("Email")
const id=localStorage.getItem("TokenId")

const InitialAuthState={IsAuthenticate:id, email:email,isLogin:localStorage.getItem("TokenID")?true:false}

const AuthenticationSlice=createSlice({
    name:"Athentication",
    initialState:InitialAuthState,
    reducers:{
        Login(state,action){
            state.IsAuthenticate=action.payload
            state.isLogin=!!state.IsAuthenticate
        },
        LogOut(state,action){
            state.IsAuthenticate=action.payload
            state.isLogin=false
        }
    }
    
})

export const AuthActions=AuthenticationSlice.actions
export default AuthenticationSlice.reducer
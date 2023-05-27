import { createSlice } from "@reduxjs/toolkit";

const initialState={ShowInbox:true}

const SideBarBtnFuncSlice=createSlice({
    name:'SideBarBtnFunc',
    initialState:initialState,
    reducers:{
        ShowInboxFunc(state){
            state.ShowInbox=!state.ShowInbox
        }
    }

})

export const SideBarBtnActions=SideBarBtnFuncSlice.actions
export default SideBarBtnFuncSlice.reducer
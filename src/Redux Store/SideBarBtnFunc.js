import { createSlice } from "@reduxjs/toolkit";
import Store from "./ReduxStore";

const initialState = { ShowSideNav:false }

const SideBarBtnFuncSlice = createSlice({
    name: 'SideBarBtnFunc',
    initialState: initialState,
    reducers: {
        ShowInboxFunc(state) {
            state.ShowSideNav = !state.ShowSideNav
        },
        updateScreenSize(state) {
            state.ShowSideNav = window.innerWidth <= 768 && false;
        }
    }
})

export const SideBarBtnActions = SideBarBtnFuncSlice.actions
export default SideBarBtnFuncSlice.reducer

//Auto Closing Tab when screen Size > 768px
window.addEventListener("resize", () => {
    Store.dispatch(SideBarBtnActions.updateScreenSize());
  });
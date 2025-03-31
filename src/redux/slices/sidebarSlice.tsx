import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface SidebarState {
  isShow:Boolean 
}

// Define the initial state using that type
const initialState: SidebarState = {
  isShow: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showSideBar: (state) => {
      state.isShow = true
    },
    hideSideBar: (state) => {
      state.isShow =  false
    },
  },
})

export const { showSideBar, hideSideBar } = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isSideBarShow = (state: RootState) => state.sidebarSlice.isShow

export default sidebarSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleCart: (state)=>{
        state.value = !state.value;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleCart } = navbarSlice.actions

export default navbarSlice.reducer;
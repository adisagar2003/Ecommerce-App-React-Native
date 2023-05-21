import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart:(state, action)=>{
        state.value = [...state.value, action.payload]
    },
    removeFromCart: (state, action) => {
      state.value.filter(product=>product.name==action.payload.name);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer
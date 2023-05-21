import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/Slices/CartSlice';
import navbarReducer from './components/Slices/NavbarSlice';
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    navbar:navbarReducer
  },
})
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from './Slices/NavbarSlice';
const  CartButton= () => {

    const {colorScheme} = useColorScheme();
    const cartItems = useSelector((state)=>state.cart.value);
    const navbarItems = useSelector((state)=>state.navbar.value);
    const dispatch= useDispatch();
  return (
    <TouchableOpacity onPress={()=>dispatch(toggleCart())} className="p-2 dark:text-white bg-gray-500/10 mt-4 rounded-lg" >
            <Feather name="shopping-cart" size={24} className="dark:text-white " color={colorScheme==="dark"?"white":"black"} />

    </TouchableOpacity>
  )
}

export default CartButton;
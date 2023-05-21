import { View, Text, Image, TouchableOpacity, useColorScheme, Button } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Slices/CartSlice';

const ProductCard = ({
    image, 
    category,
    name, 
    price,
    imgUrl,
    description
}) => {
  const [count,setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  const cart = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <View className="w-80 relative items-center  dark:bg-gray-50/5 border-2 text-slate-100 dark:text-white rounded-3xl p-5 ">

        <Image source={{uri:imgUrl}} className="w-full h-64 " style={{resizeMode:"contain"}} />
        <View className="flex items-center ">
            <Text className="dark:text-slate-100 font-bold">{name}</Text>
            <Text className="dark:text-slate-100 font-bold">{price}$</Text>
        </View>
        <TouchableOpacity className="w-[70%] rounded-sm bg-zinc-400/50 dark:bg-zinc-800/50  mt-4 items-center" onPress={()=>dispatch(addToCart({name,price,imgUrl}))}>
            <Text className="w-[60%] dark:text-slate-100  font-bold p-2">Add To Cart</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductCard
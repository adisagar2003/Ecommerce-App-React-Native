import { View, Text, Image } from 'react-native'
import React from 'react'

const CartItem = ({name, price, imgUrl}) => {
  return (
    <View className="w-[70%] h-[100px] relative  border-lg bg-slate-100 dark:bg-zinc-800">
      <Text className="absolute right-10 top-[39%] text-xl dark:text-white ">{price}$</Text>
      <Image source={{uri:imgUrl}}  className="w-[50%] h-[100%]" style={{resizeMode:'contain'}}/>
    </View>
  )
}

export default CartItem
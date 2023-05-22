import { View, Text, useColorScheme, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Sidebar = () => {
    const {colorScheme} = useColorScheme();
    const initialValue = 0;
    const cartItems = useSelector((state)=>state.cart.value);
    const navbarItems = useSelector((state)=>state.navbar.value);
    const [sum, setSum] = useState(0);
    useEffect(()=>{
      cartItems.map((product)=>{
        setSum(sum+product.price);
      })
    },[cartItems]); 
    
  return (
    <>
    {navbarItems && <View className="w-[100%] absolute z-[100] h-full top-[10vh] h-full z-9 bg-slate-100 dark:bg-zinc-950">
    <View className="w-[100%] bg-slate-100 dark:bg-zinc-950">
        <FlatList
        data ={cartItems}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        renderItem={(item)=><CartItem price={item.item.price} imgUrl={item.item.imgUrl} name={item.item.name} />}
        />
        
         <View>
    </View>
    </View>
  
    <View className="absolute bg-slate-100 dark:bg-zinc-950 m-auto flex justify-center items-center transform left-0 right-0 bottom-20 p-4 w-[100%]">
            <Text className="text-zinc-950 dark:text-zinc-100 text-xl ml-2">Subtotal: {sum}</Text>
            <TouchableOpacity>
              <Text className="text-zinc-950 dark:text-zinc-100 mt-6 font-bold bg-slate-100 dark:bg-slate-900 flex p-4 rounded-xl">Checkout</Text>
            </TouchableOpacity>
        </View>

        </View>
        
        }
    </>
  )
}

export default Sidebar
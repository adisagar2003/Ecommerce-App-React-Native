import { View, Text, useColorScheme, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Sidebar = () => {
    const {colorScheme} = useColorScheme();
    const initialValue = 0;
   
    const cartItems = useSelector((state)=>state.cart.value);
    const navbarItems = useSelector((state)=>state.navbar.value);
    
  return (
    <>
    {navbarItems && <View className="w-[100%] absolute z-[100] h-full top-[10vh] h-full z-9 bg-slate-500/50 dark:bg-zinc-600/50">
    <View className="w-[100%] bg-slate-100 dark:bg-zinc-950">
        <FlatList
        data ={cartItems}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        renderItem={(item)=><CartItem price={item.item.price} imgUrl={item.item.imgUrl} name={item.item.name} />}
        />
         <View>
        <View>
            <Text>Subtotal: {}</Text>
        </View>
    </View>
    </View>
   
    </View>}
    </>
  )
}

export default Sidebar
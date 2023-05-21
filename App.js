import { StatusBar } from 'expo-status-bar';
import React from 'react';
 import { SafeAreaView, Text, View, Switch, FlatList } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import { DATA } from './components/PRODUCT_DATA';
export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
<SafeAreaView className="flex-1 dark:bg-zinc-950 bg-zince-250 pt-5  ">
      <View className="flex-0 items-center flex-row ml-3 justify-center gap-4">
        <Text className="font-bold  text-zinc-950 dark:text-white text-xl">ECom</Text>
        <Switch value={colorScheme==="dark"} onChange={toggleColorScheme}  className="" />
      </View> 
      
        <ProductList />

</SafeAreaView>
  );
}


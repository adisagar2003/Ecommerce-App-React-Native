import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { DATA } from './PRODUCT_DATA'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <View className="flex  items-center">

    <FlatList
    data={DATA.arrayOfProducts}
    ItemSeparatorComponent={() => <View style={{height: 20}} />}
     renderItem={(item)=><ProductCard name={item.item.name} price={item.item.price} imgUrl={item.item.imgUrl} />}
   />
     </View>
  )
}

export default ProductList
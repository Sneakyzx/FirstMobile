import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from './common/HomeHeader'
import StyledText from '../../components/base/StyledText'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import HamburgerItem from './common/HamburgerItem'
import SpagettiItem from './common/SpagettiItem'
import PizzaItem from './common/PizzaItem'
import ItemList from './common/ItemList'
import BestSellerItem from './common/BestSellerItem'
import CreditCardForm from '../../Hung/CreditCardForm'

const MenuScreen = () => {
 
  return (
    <ScrollView style={{paddingHorizontal : 20}}>
     <HomeHeader/>
    <View style={styles.banner}>
     <Text style={styles.text} >Thưởng thức những chiếc hamburger <Text style={{color : '#e54a2b' }}>ngon tuyệt</Text> với mức giá hợp lý</Text>
      <TouchableOpacity style={styles.orderBTN}>
        <StyledText customStyle={{color : 'white', fontWeight:'bold'}} value='Đặt món ngay'/>
      </TouchableOpacity>
      </View>
      <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.toString() } horizontal data={[1]} renderItem={() => {
        return  <ItemList />
      }}/>
      <StyledText value='Các món bán chạy' customStyle={styles.tittle}  />
       <FlatList  showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.toString() } horizontal data={[1]} renderItem={() => {
        return  <BestSellerItem />
      }}/>
      
    </ScrollView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  text : {
    fontSize : 18,
  },
  banner : {
    paddingHorizontal : 20,
    width : '100%',
    height : 150,
    backgroundColor : '#FFE99E',
    borderRadius : 10,
    paddingVertical : 15,
  },
   orderBTN : {
    marginTop : 30,
    backgroundColor : '#e54a2b',
    borderRadius: 25,
    width : 120,
    height : 40,
    alignItems : 'center',
    justifyContent : 'center'
   },
   tittle : {
    fontWeight : 'bold',
    marginVertical : 10,
   }
 
})
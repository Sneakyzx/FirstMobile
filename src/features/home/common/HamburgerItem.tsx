import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import StyledTouchable from '../../../components/base/StyledTouchable'
import Images from '../../../assests'
import StyledText from '../../../components/base/StyledText'

const HamburgerItem = () => {

    const burgerItem = [
        {id : 1 , name : 'Burger bò', image : require('../../../assests/item/beefburger.png'),price : '20.000Đ',description : 'Burger và bò'},
        {id : 2 , name : 'Burger xúc xích phô mai', image : require('../../../assests/item/forkburger.png'),price : '20.000Đ',description : 'Burger và xúc xích phủ phô mai'},
        {id : 3 , name : 'Burger gà', image : require('../../../assests/item/chickenburger.png'),price : '20.000Đ',description : 'Burger và gà'},
        {id : 4 , name : 'Combo burger kèm khoai và nước', image : require('../../../assests/item/burgercombo.png'),price : '89.000Đ',description : 'Bao gồm 1 burger 1 khoai 1 nước'},
      ]

      
  return (
    <FlatList
    contentContainerStyle = {styles.container1}
     data={burgerItem}
     renderItem={({ item }) => (
     <TouchableOpacity
       style={styles.object1}
     >
         <Image 
         style = {styles.project1}
         source={item.image}/>
       <Text style={styles.itemName}>{item.name}</Text>
       <Text style={styles.itemDescription}>{item.description}</Text>
       <Text style={styles.itemPrice}>{item.price}</Text>
     </TouchableOpacity>
   )}
   keyExtractor={(item) => item.id.toString()}
 />)
 }
 
 export default React.memo(HamburgerItem)
 
 const styles = StyleSheet.create({
    itemPrice : {
        fontWeight :'bold',
        marginTop :5
    },
    itemDescription : {
        textAlign : 'center'
    },
    itemName : {
        fontWeight :'bold',
        marginVertical : 3,
        fontSize : 15
    },
     container1 : {
         flexDirection  : 'row',
         alignItems: 'center',
        
     },
     project1 : {
         width : 100,
         height : 100,
         alignSelf : 'center',
         marginRight : 5
        
     },
    
     object1: {
         flexDirection : 'column',
         width : 150,
         height :250,
         borderWidth : 1,
         borderRadius : 15,
         padding: 10,
         borderColor: '#ccc',
         backgroundColor: '#fff',
         marginHorizontal : 5,
         paddingHorizontal : 5,
         justifyContent : 'center',
         alignItems : 'center'
       },
     
 })
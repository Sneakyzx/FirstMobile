import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StyledTouchable from '../../../components/base/StyledTouchable'
import Images from '../../../assests'
import StyledText from '../../../components/base/StyledText'

const PizzaItem = () => {
    const burgerItem = [
        {id : 1 , name : 'Pizza bò', image : require('../../../assests/item/beefburger.png'),price : '20.000Đ',description : 'Burger và bò'},
        {id : 2 , name : 'Pizza xúc xích phô mai', image : require('../../../assests/item/forkburger.png'),price : '20.000Đ',description : 'Burger và bò'},
        {id : 3 , name : 'Pizza gà', image : require('../../../assests/item/chickenburger.png'),price : '20.000Đ',description : 'Burger và bò'},
        {id : 4 , name : 'Pizza', image : require('../../../assests/item/burgercombo.png'),price : '89.000Đ',description : 'Burger và bò'},
      ]

      
  return (
    <FlatList
    contentContainerStyle = {styles.container}
     data={burgerItem}
     renderItem={({ item }) => (
     <TouchableOpacity
       style={styles.object}
     >
         <Image 
         style = {styles.project}
         source={item.image}/>
       <Text style={styles.itemName}>{item.name}</Text>
       <Text style={styles.itemDescription}>{item.description}</Text>
       <Text style={styles.itemPrice}>{item.price}</Text>
     </TouchableOpacity>
   )}
   keyExtractor={(item) => item.id.toString()}
 />)
 }
 
 export default React.memo(PizzaItem)
 
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
     container : {
         flexDirection  : 'row',
         alignItems: 'center',
        
     },
     project : {
         width : 100,
         height : 100,
         alignSelf : 'center',
         marginRight : 5
        
     },
    
     object: {
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
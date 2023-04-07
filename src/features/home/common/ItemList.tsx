import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import StyledTouchable from '../../../components/base/StyledTouchable'
import Images from '../../../assests'
import StyledText from '../../../components/base/StyledText'
import PizzaItem from './PizzaItem'
import HamburgerItem from './HamburgerItem'
import SpagettiItem from './SpagettiItem'

const ItemList = () => {
    // const allItems = [
    //     { id: 1, name: 'Pizza', image: require('../../../assests/icons/Pizza.png') },
    //     { id: 2, name: 'Hamburger', image: require('../../../assests/icons/Hamburger.png') },
    //     { id: 3, name: 'Spagetti', image: require('../../../assests/icons/spagetti.png') },
    //   ];

    const [selectedObject, setSelectedObject] = useState(null);
    const objects = [
        { id: 1, name: 'Pizza',image: require('../../../assests/icons/Pizza.png') },
        { id: 2, name: 'Hamburger',image: require('../../../assests/icons/Hamburger.png') },
        { id: 3, name: 'Spagetti' ,image: require('../../../assests/icons/spagetti.png') },
      ];
      
    
  return (
   <FlatList
   contentContainerStyle = {styles.container}
    data={objects}
    renderItem={({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedObject(item)}
      style={selectedObject && selectedObject.id === item.id ? styles.selectedObject : styles.object}
    >
        <Image 
        style = {styles.project}
        source={item.image}/>
      <Text style={selectedObject && selectedObject.id === item.id ? styles.selectedText : styles.normalText}>{item.name}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id.toString()}
/>)
}

export default React.memo(ItemList)

const styles = StyleSheet.create({
    container : {
        flexDirection  : 'row',
        alignItems: 'center',

    },
    project : {
        width : 40,
        height : 40,
        alignSelf : 'center',
        marginRight : 5
       
    },
    item : {
        width : 150,
        height : 50,
        borderWidth : 1,
        borderRadius : 15,
        padding : 10,
        alignItems : 'flex-start',
        marginHorizontal : 5,
        justifyContent : 'flex-start',
        flexDirection : 'row',
        backgroundColor : '#e54a2b'
    },
    normalText : {
        fontSize : 18,
        fontWeight : 'bold',
        color : 'gray'
    },
    selectedText : {
        fontSize : 18,
        fontWeight : 'bold',
        color : 'white'
    },
    object: {
        flexDirection : 'row',
        width : 150,
        height : 50,
        borderWidth : 1,
        borderRadius : 15,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginHorizontal : 5,
        paddingHorizontal : 5
      },
      selectedObject: {
        flexDirection : 'row',
        width : 150,
        height : 50,
        borderWidth : 1,
        borderRadius : 15,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: '#e54a2b',
        marginHorizontal : 5,
        paddingHorizontal : 5
      },
    
})
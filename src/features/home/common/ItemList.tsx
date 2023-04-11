import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StyledText from '../../../components/base/StyledText';

const data = [
    { id: 1, title: 'Pizza', image: require('../../../assests/icons/Pizza.png'),
    innerData: [
      { id: 1, name: 'Pizza Hawaii',image : require('../../../assests/item/pizzahawai.png'),price : '150.000Đ',description : 'Bao gồm dăm bông dứa và phô mai' },
      { id: 2, name: 'Burger bò xay',image : require('../../../assests/item/pizzabo.png'),price : '150.000Đ',description : 'Bao gồm bò ngô phô mai' },
      { id: 3, name: 'Pizza hải sản',image : require('../../../assests/item/pizzahaisan.png'),price : '150.000Đ',description : 'Pizza cùng các loại hải sản' },
    ], },
    { id: 2, title: 'Hamburger',image: require('../../../assests/icons/Hamburger.png'),
     innerData: [
      { id: 1, name: 'Burger Bò',image : require('../../../assests/item/beefburger.png'),price : '20.000Đ',description : 'Burger và bò' },
      { id: 2, name: 'Burger Gà',image : require('../../../assests/item/chickenburger.png'),price : '20.000Đ',description : 'Burger và gà' },
      { id: 3, name: 'Burger Xúc xích phô mai', image : require('../../../assests/item/forkburger.png'),price : '20.000Đ',description : 'Burger và xúc xích phủ phô mai' },
      { id: 4, name: 'Combo burger burger và nước',image : require('../../../assests/item/burgercombo.png'),price : '89.000Đ',description : 'Bao gồm 1 burger 1 khoai 1 nước' },
    ],},
    {
      id: 3,
      title: 'Spagetti',image: require('../../../assests/icons/spagetti.png'),
      innerData: [
        { id: 1, name: 'Inner Data 3',image : require('../../../assests/item/beefburger.png'),price : '20.000Đ',description : 'Burger và bò' },
        { id: 2, name: 'Inner Data 3',image : require('../../../assests/item/beefburger.png'),price : '20.000Đ',description : 'Burger và bò' },
        { id: 3, name: 'Inner Data 3',image : require('../../../assests/item/beefburger.png'),price : '20.000Đ',description : 'Burger và bò' },
      ],
    },
  ];

const App = () => {
  const [selectedDataId, setSelectedDataId] = useState(null);

  const renderInnerData = ({ item }) => {
    return (
    <View style={{flexDirection : 'row'}}>
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
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
            setSelectedDataId(item.id);
        }}
        style={selectedDataId === item.id ? styles.selectedObject : styles.object}
      >

        <Image 
        style = {styles.project}
        source={item.image}/>
          <Text style={selectedDataId === item.id ? styles.selectedText : styles.normalText}>{item.title}</Text>
      
      </TouchableOpacity>
    );
  };

  return (
    <View>
        <StyledText customStyle={styles.tittle} value='Các món ăn' />
   <TouchableOpacity>
      <FlatList
       contentContainerStyle = {styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    <StyledText value='Danh sách món ăn' customStyle={styles.tittle} />
    <TouchableOpacity>{selectedDataId && (
        <FlatList 
        contentContainerStyle = {styles.container}
        data={data.find((item) => item.id === selectedDataId).innerData}
          renderItem={renderInnerData}
          keyExtractor={(item) => item.id.toString()}
        />
      )}</TouchableOpacity>
    </TouchableOpacity>
    </View>
  );
};

export default React.memo(App);

const styles = StyleSheet.create({
    container : {
        flexDirection  : 'row',
        alignItems : 'flex-start',
        marginVertical : 10
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
       tittle : {
        fontWeight : 'bold',
        marginVertical : 10,
       }
})
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StyledTouchable from '../components/base/StyledTouchable';
import StyledText from '../components/base/StyledText';
import { TAB_NAVIGATION_ROOT } from '../navigation/config/routes';
import { navigate } from '../navigation/NavigationService';

const OrderDetailsPage = () => {
  const goToStart = () => {
    navigate(TAB_NAVIGATION_ROOT.MENU_ROUTE.MENU_SCREEN, {
    });
  };
  const goToPayment = () => {
    navigate(TAB_NAVIGATION_ROOT.PAYMENT_ROUTE.PAYMENT_SCREEN)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        {/* <Image
          style={styles.image}
          source={{ uri : 'https://www.moillusions.com/wp-content/uploads/2014/10/Hamburger-Optical-Illusion.png'}}
        /> */}
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>Giỏ hàng</Text>
         <View style={styles.itemInfo1}> 
          <Text style={styles.itemPrice}>Địa chỉ nhận hàng : Thanh Trì , Hà Nội đ</Text>
          <Text style={styles.itemPrice}>Số điện thoại : 0383xxx797</Text>
          </View>
        </View>
      </View>
      <View style={styles.orderSummary}>
        <Text style={styles.summaryText}>Danh sách đơn hàng:</Text>
        <Text style={styles.summaryText1}>1x Burger Cá</Text>
        <Text style={styles.summaryText1}>1x Burger Gà</Text>
        <Text style={styles.summaryText1}>1x Burger Tôm</Text>
        <Text style={styles.summaryText1}>1x Burger Bò</Text>
        <Text style={styles.summaryText1}>1x Spagetti</Text>
        <Text style={styles.summaryText2}>Tổng: 120.000đ</Text>
      </View>
      <View style={styles.PayOrder}>
        <StyledTouchable onPress={goToStart} customStyle={styles.BuyItem}>
          <StyledText customStyle={styles.BuyItemText} value='<--- Mua thêm sản phẩm'/>
        </StyledTouchable>
        <StyledTouchable onPress={goToPayment} customStyle={styles.BuyItem}>
          <StyledText customStyle={styles.BuyItemText} value='Thanh toán --->'/>
        </StyledTouchable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#fff',
    height :'100%'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
 
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    
  },
  itemInfo: {
    flex: 1,

    backgroundColor :'#e54a2b',
    borderBottomColor : 'white'

  },
  itemInfo1: {
    flex: 1,
    borderWidth : 1,
    backgroundColor :'#e54a2b',
    marginBottom : 10,
    borderTopColor : 'white',
    borderBottomColor :'transparent'
  },
  itemName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
 
    alignSelf :'center',
    color : 'white',
   

  },
  itemPrice: {
    fontSize: 16,
    color: 'black',
    marginVertical : 5,
    paddingHorizontal : 20,

  },
  orderSummary: {
    marginTop: 20,

    height : 500,
   

  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
    paddingHorizontal : 10,
    fontWeight : 'bold',
    borderTopWidth : 3,
    borderTopColor : '#666'
     
  },

  BuyItem : {

    height : 40,
    justifyContent : 'center',
    borderRadius : 15,
    paddingHorizontal : 10,
    alignItems : 'center',
    backgroundColor : '#e54a2b',
    marginHorizontal : 16
  },
  BuyItemText : {
    fontWeight : 'bold',color : 'white'
  },
  PayOrder : {
    flexDirection : 'row',
    marginTop : 30,
    justifyContent : 'space-between'
 
  },summaryText1: {
    color : 'black',
    fontSize: 16,
    marginBottom: 5,
    paddingHorizontal : 20,
    fontWeight : 'bold',
    marginTop : 10,
  },
  summaryText2: {
    textAlign : 'right',
    color : 'black',
    fontSize: 20,
    marginBottom: 5,
    width : '100%',
    fontWeight : 'bold',
    alignSelf : 'flex-end',
    position : 'absolute',
    top : 450,
    right : 0,
    
    paddingRight : 20,
    borderTopColor : '#666',
    borderTopWidth : 3
  },
});

export default OrderDetailsPage;

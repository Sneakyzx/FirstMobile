import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Images from '../../assests';
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes';
import { navigate } from '../../navigation/NavigationService';

const Profile = () => {
  const goToOrder = () => {
    navigate(TAB_NAVIGATION_ROOT.ORDER_ROUTE.ORDER_SCREEN)
  }

  const goToPayment = () => {
    navigate(TAB_NAVIGATION_ROOT.PAYMENT_ROUTE.PAYMENT_SCREEN)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={Images.icons.avatar}
          />
          <Text style={styles.name}>Mr Burger</Text>
          <Text style={styles.userInfo}>mr.burger@gmail.com </Text>
          <Text style={styles.userInfo}>Hà Nội</Text>
        </View>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon} 
              source={{ uri: 'https://img.icons8.com/fluency/256/settings.png' }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Cài đặt</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToPayment} style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{ uri: 'https://img.icons8.com/color/70/000000/administrator-male.png' }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Quản lý thanh toán</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{ uri: 'https://img.icons8.com/color/70/000000/filled-like.png' }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Đã thích</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToOrder} style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{ uri: 'https://img.icons8.com/office/256/shopping-bag.png' }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Sản phẩm đã chọn</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity  style={styles.buttonLogOut}>
        {/* onPress={goToHome} */}
          <Text style = {{color:'white',fontWeight :"bold"}}>Đăng xuất</Text>
        </TouchableOpacity>
    </View>
  )
}
export default Profile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e54a2b',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  container:{},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#FFFFFF',
    height: 500,
    paddingRight: 100,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#000000',
  },
  buttonLogOut: {
    color: 'white',
    backgroundColor: '#e54a2b',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
})
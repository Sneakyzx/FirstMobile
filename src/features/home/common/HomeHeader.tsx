import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledText from '../../../components/base/StyledText'
import StyledTouchable from '../../../components/base/StyledTouchable'
import Images from '../../../assests'
import { navigate } from '../../../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../../../navigation/config/routes'


const HomeHeader = () => {
  const goToProfile = () => {
    navigate(TAB_NAVIGATION_ROOT.SETTING_ROUTE.SETTING_SCREEN, {
    });
  };
  return (
    <View style={{
        flexDirection :'row',
        width : '100%',
        height : 70}}>
      <View style={styles.left}>
        <StyledTouchable>
        <Image style={styles.logo}
        source={Images.icons.menuHeader}/>
        </StyledTouchable>
        </View>
      <View style={styles.center}>
        <StyledText customStyle={styles.address} value='Thanh trì , Hà Nội'/>
      </View>
      <View style={styles.right}>
        <StyledTouchable onPress={goToProfile} customStyle ={styles.logo}>
           <Image style={styles.logo}
           source={Images.icons.avatar}/>
        </StyledTouchable>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    left : {
        width : 70,
        alignItems :'flex-start',
        justifyContent : 'center',

       
    },
    center : {
        flex :1,
        alignItems :'center',
        justifyContent : 'center',
        
    },
    right : {
        width : 70,
        alignItems :'flex-end',
        justifyContent : 'center',
       
    },
    address : {
        fontSize: 16,
        fontWeight : 'bold'
    },
    logo : {
        width : 40,
        height : 40,
        alignItems :'center',
        justifyContent : 'center',
        borderRadius : 50,
        borderColor : 'transparent',
        borderWidth : 1
    }
})
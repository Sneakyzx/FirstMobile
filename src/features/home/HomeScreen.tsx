import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import StyledText from '../../components/base/StyledText';
import Images from '../../assests';
import {TAB_NAVIGATION_ROOT} from '../../navigation/config/routes';
import {navigate} from '../../navigation/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ({route, props}: any) => {
  const goToStart = () => {
    navigate(TAB_NAVIGATION_ROOT.AUTHENTICATE_ROUTE.LOGIN, {
    });
  };
  return (
    <View>
      <Image 
      style = {styles.banner}
      source = {{uri : ('https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg')}}
       />
      <Text style = {styles.text}>Nơi những chiếc Burger <Text style={{color : '#e54a2b'}} >ngon nhất thế giới</Text> được làm ra</Text>
      <Text style={{
        textAlign : 'center',
        fontSize : 18,
        paddingHorizontal : 50,
        marginBottom : 60
      }}>
        Bạn chỉ cần tới và thưởng thức còn việc phục vụ là của chúng tôi</Text>
        <TouchableOpacity onPress={goToStart}>
          <Text style={styles.buttonGo}>Bắt đầu thôi</Text>
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner : {
    width : 400,
    height : 400,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50

  },
  text : {
    fontWeight : 'bold',
    fontSize : 25,
    color : 'black',
    textAlign : 'center',
    paddingHorizontal : 4,
    marginBottom : 30,
    paddingTop : 30,
  },
  buttonGo : {
    textAlign : 'center',
    fontSize : 18,
    fontWeight : 'bold',
    color : 'white',
    width : 200,
    height : 50,
    alignSelf : 'center',
    lineHeight : 50,
    borderRadius : 23,
    backgroundColor : '#e54a2b'
  }
});

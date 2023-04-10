import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyledTouchable from '../components/base/StyledTouchable';
import StyledText from '../components/base/StyledText';
import { navigate } from '../navigation/NavigationService';
import { TAB_NAVIGATION_ROOT } from '../navigation/config/routes';

export default function TermsAndPolicies() {
  const goToSignup = () => {
    navigate(TAB_NAVIGATION_ROOT.AUTHENTICATE_ROUTE.REGISTER
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Điều khoản và Chính sách</Text>
      <Text style={styles.text}>
        1. Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng theo quy
        định của pháp luật Việt Nam.
      </Text>
      <Text style={styles.text}>
        2. Chúng tôi sẽ không chia sẻ thông tin của khách hàng cho bất kỳ đối
        tác thương mại điện tử hoặc bên thứ ba nào khác.
      </Text>
      <Text style={styles.text}>
        3. Chúng tôi cam kết cung cấp các sản phẩm và dịch vụ chất lượng và
        đảm bảo tính xác thực của thông tin về sản phẩm và dịch vụ trên
        ứng dụng.
      </Text>
      <Text style={styles.text}>
        4. Nếu có bất kỳ thắc mắc hay khiếu nại nào về sản phẩm hoặc dịch
        vụ của chúng tôi, quý khách hàng vui lòng liên hệ với chúng tôi để
        được giải quyết.
      </Text>
      <Text style={styles.text}>
        5. Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát
        sinh từ việc sử dụng ứng dụng của chúng tôi.
      </Text>

      <StyledTouchable customStyle={styles.goBack} onPress={goToSignup}>
        <StyledText customStyle={{fontWeight : 'bold',color : 'white'}} value='<-- Quay lại trang trước'/>
      </StyledTouchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  goBack : {
    borderWidth : 1,
    width : 170,
    height : 40,
    justifyContent : 'center',
    borderRadius : 15,
    paddingHorizontal : 5,
    alignItems : 'center',
    backgroundColor : '#e54a2b'
  }
});

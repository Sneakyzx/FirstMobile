import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../../features/authenticate/LoginScreen';
import RegisterScreen from '../../features/authenticate/RegisterScreen';
import HomeScreen from '../../features/home/HomeScreen';
import BottomTab from '../../features/home/BottomTab';
import navigationConfigs from '../config/options';
import {AUTHENTICATE_ROUTE, TAB_NAVIGATION_ROOT, HOME_ROUTE , BOTTOMTAB_ROUTE, POLICY_ROUTE, ORDER_ROUTE, PAYMENT_ROUTE} from '../config/routes';
import {RootStackParamList} from './RootScenes';
import CreditCardForm from '../../Hung/CreditCardForm';
import OrderDetailsPage from '../../Hung/OrderSummary';
import TermsAndPolicies from '../../Hung/TermsAndPolicies';



const MainStack = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={AUTHENTICATE_ROUTE.LOGIN}
        component={LoginScreen}
      />
      <MainStack.Screen
        name={AUTHENTICATE_ROUTE.REGISTER}
        component={RegisterScreen}
      />
      <MainStack.Screen
        name={HOME_ROUTE.HOME_SCREEN}
        component={HomeScreen}
      />
       <MainStack.Screen
        name={BOTTOMTAB_ROUTE.BOTTOMTAB_SCREEN}
        component={BottomTab}
      />
       <MainStack.Screen
        name={POLICY_ROUTE.POLICY_SCREEN}
        component={TermsAndPolicies}
      />
       <MainStack.Screen
        name={ORDER_ROUTE.ORDER_SCREEN}
        component={OrderDetailsPage}
      />
      <MainStack.Screen
        name={PAYMENT_ROUTE.PAYMENT_SCREEN}
        component={CreditCardForm}
      />
    </MainStack.Navigator>
  );
};

export default AuthStack;

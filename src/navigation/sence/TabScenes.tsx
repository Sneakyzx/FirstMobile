import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// Screen
import React from 'react';
import Images from '../../assests';
import HomeScreen from '../../features/home/HomeScreen';
import MainScreen from '../../features/home/BottomTab';
import ProfileScreen from '../../features/settings/ProfileScreen';
import StyledTabBar from '../component/StyledTabBar';
import navigationConfigs, {tabScreenOptions} from '../config/options';
import {TAB_NAVIGATION_ROOT} from '../config/routes';
import MenuScreen from '../../features/home/MenuScreen';
import CreditCardForm from '../../Hung/CreditCardForm';
import BestSellerItemCopy from '../../features/home/common/BestSellerItem copy';


const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const HomeStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT}
      component={HomeScreen}
    />
  </MainStack.Navigator>
);

const SettingStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.SETTING_ROUTE.ROOT}
      component={ProfileScreen}
    />
  </MainStack.Navigator>);
  
  const MenuScreenStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={TAB_NAVIGATION_ROOT.MENU_ROUTE.MENU_SCREEN}
        component={MenuScreen}
      />
    </MainStack.Navigator>
     
);
const PaymentScreenStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.PAYMENT_ROUTE.PAYMENT_SCREEN}
      component={CreditCardForm}
    />
  </MainStack.Navigator>
  )


const MainTabContainer = () => {
  const ArrayTabs = [
    {
      name: TAB_NAVIGATION_ROOT.MENU_ROUTE.ROOT,
      title: 'Menu',
      component: MenuScreenStack,
      icon: Images.icons.menu,
    },
    {
      name: TAB_NAVIGATION_ROOT.SETTING_ROUTE.SETTING_SCREEN,
      title: 'Cài đặt',
      component: SettingStack,
      icon: Images.icons.settings,
    },
    {
      name: TAB_NAVIGATION_ROOT.PAYMENT_ROUTE.ROOT,
      title: 'Cài đặt',
      component: PaymentScreenStack,
      icon: Images.icons.payment,
    },
  ];
  return (
    <MainTab.Navigator
      screenOptions={tabScreenOptions}
      tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}>
      {ArrayTabs.map((item, index) => (
        <MainTab.Screen
          key={`${index}`}
          options={({navigation}) => {
            const {routes, index} = navigation.getState();
            const {state} = routes[index];
            let tabBarVisible = true;
            if (state) {
              const {routes, index} = state;
              const exploreActiveRoute = routes[index];
              if (exploreActiveRoute?.name !== routes[0]?.name)
                tabBarVisible = false;
            }
            return {
              title: item.title,
              icon: item.icon,
              tabBarVisible: tabBarVisible,
            };
          }}
          {...item}
        />
      ))}
    </MainTab.Navigator>
  );
};

export default MainTabContainer;

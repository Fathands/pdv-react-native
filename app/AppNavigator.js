
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";

import TabBarComponent from './pages/components/common/TabBarComponent'

import Visa from './pages/visa/Visa'

import Orders from './pages/orders/Orders'

import Me from './pages/me/Me'
import Detail from './pages/me/home/detail/Detail'

import Welcome from './pages/welcome/Welcome'

const VisaStack = createStackNavigator({
  Visa,
}, {
  initialRouteName: 'Visa'
})
VisaStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const OrdersStack = createStackNavigator({
  Orders,
}, {
  initialRouteName: 'Orders'
})
OrdersStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const MeStack = createStackNavigator({
  Me,
  Detail,
}, {
  initialRouteName: 'Me'
})
MeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const tabBottomNav = createBottomTabNavigator(
  {
    VISA: VisaStack,
    ORDERS: OrdersStack,
    ME: MeStack,
  },
  {
    initialRouteName: 'VISA',
    tabBarComponent: TabBarComponent,
  }
);

const WelcomeStack = createStackNavigator({
  Welcome,
}, {
  initialRouteName: 'Welcome'
})

const SwitchNav = createSwitchNavigator({
  Welcome: WelcomeStack,
  tabBottomNav,
});

const AppContainer = createAppContainer(SwitchNav);

export default AppContainer;
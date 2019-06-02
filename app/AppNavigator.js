
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarComponent from './src/components/common/TabBarComponent';

import Visa from './src/pages/visa/Visa';

import Orders from './src/pages/orders/Orders';

import Me from './src/pages/me/Me';
import Detail from './src/pages/me/home/detail/Detail';

import Startup from './src/pages/startup/Startup';
import Welcome from './src/pages/welcome/Welcome';

const VisaStack = createStackNavigator({
  Visa,
}, {
  initialRouteName: 'Visa'
});
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
});
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
});
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

const StartupStack = createStackNavigator({
  Startup,
}, {
  initialRouteName: 'Startup'
});

const WelcomeStack = createStackNavigator({
  Welcome,
}, {
  initialRouteName: 'Welcome'
});

const SwitchNav = createSwitchNavigator({
  Startup: StartupStack,
  Welcome: WelcomeStack,
  tabBottomNav,
});

const AppContainer = createAppContainer(SwitchNav);

export default AppContainer;

import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarComponent from './src/components/common/TabBarComponent';

import Visa from './src/pages/visa/Visa';

import Orders from './src/pages/orders/Orders';

import Mine from './src/pages/mine/Mine';
import Detail from './src/pages/mine/home/detail/Detail';

import Startup from './src/pages/startup/Startup';
import Welcome from './src/pages/welcome/Welcome';
import Login from './src/pages/login/Login';

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

const MineStack = createStackNavigator({
  Mine,
  Detail,
}, {
  initialRouteName: 'Mine'
});
MineStack.navigationOptions = ({ navigation }) => {
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
    Mine: MineStack,
  },
  {
    initialRouteName: 'VISA',
    tabBarComponent: TabBarComponent,
  }
);

const SwitchNav = createSwitchNavigator({
  Startup: {
    screen: Startup,
  },
  Welcome: {
    screen: Welcome,
  },
  Login: {
    screen: Login,
    mode: 'modal'
  },
  tabBottomNav,
});

const AppContainer = createAppContainer(SwitchNav);

export default AppContainer;

import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarComponent from '../components/common/TabBarComponent';

import Visa from '../pages/visa/Visa';

import Orders from '../pages/orders/Orders';
import Detail from '../pages/orders/home/detail/Detail';

import Mine from '../pages/mine/Mine';

import Startup from '../pages/startup/Startup';
import Welcome from '../pages/welcome/Welcome';
import Login from '../pages/login/Login';

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
  Detail,
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
    navigationOptions: {
      header: null
    }
  }
);

const MainStack = createStackNavigator({
  tabBottomNav,
  Login: {
    screen: Login,
    mode: 'modal'
  },
}, {
  initialRouteName: 'tabBottomNav',
});

const SwitchNav = createSwitchNavigator({
  Startup,
  Welcome,
  MainStack,
}, {
  navigationOptions: {
    header: null
  }
});

const AppContainer = createAppContainer(SwitchNav);

export default AppContainer;
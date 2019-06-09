import React from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import Images from '../../assets/images';

const TabBarComponent = props => {
  const {
    onTabPress,
    onTabLongPress,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;
  const tabName = {
    VISA: '签证',
    ORDERS: '订单',
    Mine: '我的',
  };

  const tabImage = {
    VISA: 'nav_visa',
    ORDERS: 'nav_order',
    Mine: 'nav_mine'
  };

  const activeTintColor = '#ff5a60';
  const inactiveTintColor = '#cfcfcf';
  return (
    <Footer>
      <FooterTab>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          const iconUrl = isRouteActive ? Images.tabbar[tabImage[route.routeName] + '_a'] : Images.tabbar[tabImage[route.routeName]];
          return (
            <Button
              badge
              vertical
              key={routeIndex}
              onPress={() => {
                onTabPress({ route });
              }}
              onLongPress={() => {
                onTabLongPress({ route });
              }}>
              <Image
                source={iconUrl}
              />
              <Text style={{ color: tintColor }}>{tabName[route.routeName]}</Text>
            </Button>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

export default TabBarComponent;
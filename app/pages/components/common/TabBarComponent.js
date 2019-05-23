import React from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';

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
    ME: '我的',
  };

  const activeTintColor = '#ff4646';
  const inactiveTintColor = '#d6d6d6';

  return (
    <Footer>
      <FooterTab>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
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
              <Icon name="apps" style={{ color: tintColor }} />
              <Text style={{ color: tintColor }}>{tabName[route.routeName]}</Text>
            </Button>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

export default TabBarComponent;
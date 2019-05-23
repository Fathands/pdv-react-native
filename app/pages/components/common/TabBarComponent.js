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
  return (
    <Footer>
      <FooterTab>
        {routes.map((route, routeIndex) => {
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
              <Icon name="apps" />
              <Text>{tabName[route.routeName]}</Text>
            </Button>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

export default TabBarComponent;
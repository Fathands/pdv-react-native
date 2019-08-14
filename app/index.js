/*
 * @Author: Aiden
 * @Date: 2019-05-19 15:26:50
 * @LastEditors: Aiden
 * @LastEditTime: 2019-08-15 00:09:40
 * @Description: file content
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import AppContainer from './src/navigator/AppNavigator';

import { name as appName } from './app.json';

class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <AppContainer />
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);

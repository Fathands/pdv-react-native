
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import AppContainer from './AppNavigator';

import {name as appName} from './app.json';

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

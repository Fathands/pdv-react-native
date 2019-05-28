import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Text>
        Welcome
      </Text>
    );
  }
}

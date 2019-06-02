import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  onPressLearnMore() {
    this.props.navigation.navigate('Detail');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, RN!</Text>
        <Button
          onPress={this.onPressLearnMore.bind(this)}
          title="wi"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
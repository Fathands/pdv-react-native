import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ListView } from 'react-native';

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  onPressLearnMore() {
    this.props.navigation.push('Detail');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail</Text>
        <Button
          onPress={this.onPressLearnMore.bind(this)}
          title="go"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
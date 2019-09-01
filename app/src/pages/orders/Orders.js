
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Orders extends Component {
  onPressLearnMore() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <Text>orders</Text>
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

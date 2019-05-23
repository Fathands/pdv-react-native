import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

export default class Welcome extends Component {

  onPressLearnMore() {
    this.props.navigation.navigate('Visa');
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
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

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ViewPager
        style={styles.viewPager}
        initialPage={0}>
        <View key="1">
          <Text style={styles.text}>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    backgroundColor: '#ff7378',
  },
  text: {
    fontSize: 30,
  }
});

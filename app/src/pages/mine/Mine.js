import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HearderBox from './components/HearderBox';

export default class Mine extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <HearderBox navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});
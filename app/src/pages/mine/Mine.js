
import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import HearderBox from './components/HearderBox';

export default class Mine extends Component {
  static navigationOptions = {
    header: null,
  };

  goBack() {
    this.props.navigation.navigate('Detail');
    console.log(2222);
  }

  render() {
    return (
      <View style={styles.container}>
        <HearderBox navigation={this.props.navigation} />

        <List style={styles.listStyle}>
          <ListItem onPress={this.goBack.bind(this)}>
            <Text style={styles.listText}>我的订单</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.listText}>收货地址</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.listText}>设置</Text>
          </ListItem>
        </List>
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
  listStyle: {
    backgroundColor: '#ffffff'
  },
  listText: {
    fontSize: 15,
    color: '#444444'
  }
});
import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import Images from '../../../assets/images';

export default class HearderBox extends Component {
  static navigationOptions = {
    header: null,
  };

  avatarClick() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <ImageBackground source={Images.mine.mine_header_bg} style={styles.imageBg}>
        <TouchableOpacity style={styles.avatar} activeOpacity={1} onPress={this.avatarClick.bind(this)}>
          <View>
            <Text>登录/注册</Text>
          </View>
          <View>
            <Text>头像</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBg: {
    height: 236,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userBox: {
    fontSize: 13,
    color: '#aaaaaa'
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
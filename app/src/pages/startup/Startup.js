/*
 * @Author: Aiden
 * @Date: 2019-05-22 00:35:37
 * @LastEditors: Aiden
 * @LastEditTime: 2019-08-15 00:04:30
 * @Description: file content
 */
import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { getData } from '../../services/async-storage.service';

export default class Startup extends Component {
  static navigationOptions = {
    header: null,
  };
  hideSplashScreen() {
    getData('welcome', 'visited').then(res => {
      if (res === 'YES') {
        this.props.navigation.navigate('Mine');
      } else {
        this.props.navigation.navigate('Welcome');
      }
    });
  }
  render() {
    return (
      <LottieView
        source={require('../../assets/json/splash_screen.json')}
        autoPlay
        loop={false}
        onAnimationFinish={this.hideSplashScreen.bind(this)}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
      />
    );
  }
}

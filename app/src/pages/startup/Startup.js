
import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { getData } from '../../services/async-storage.service';

export default class Startup extends Component {
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

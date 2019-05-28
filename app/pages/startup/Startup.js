import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

export default class Startup extends Component {
  static navigationOptions = {
    header: null,
  };
  hideSplashScreen() {
    this.props.navigation.navigate('Welcome');
  }
  render() {
    return (
      <LottieView
        source={require('../asset/json/splash_screen.json')}
        autoPlay
        loop={false}
        onAnimationFinish={this.hideSplashScreen.bind(this)}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
      />
    );
  }
}

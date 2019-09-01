
import React, { Component } from 'react';
import { Text } from 'native-base';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Image } from 'react-native';
import Images from '../../assets/images';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  loginBtnClick() {
    console.log(111);
  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ImageBackground source={Images.login.login_bg} style={styles.imageBg}>

        <TouchableOpacity style={styles.closeBox} activeOpacity={1} onPress={this.goBack.bind(this)}>
          <Image
            onPress={this.loginBtnClick.bind(this)}
            style={styles.closeIcon}
            source={Images.login.close}
          />
        </TouchableOpacity>

        <View style={styles.loginIconBox}>
          <Image
            style={styles.loginIcon}
            source={Images.login.login_logo}
          />
        </View>

        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.loginBtn} activeOpacity={1} onPress={this.loginBtnClick.bind(this)}>
            <Text style={styles.normalText}>手机号登录</Text>
          </TouchableOpacity>

          <View style={styles.subBtn}>
            <TouchableOpacity style={styles.normalBtn} activeOpacity={1} onPress={this.loginBtnClick.bind(this)}>
              <View style={styles.wechatBtn}>
                <Image
                  style={styles.wechatIcon}
                  source={Images.login.wechat}
                />
                <Text style={styles.normalText}>微信登录</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.normalBtn, ...styles.registerBtn }} activeOpacity={1} onPress={this.loginBtnClick.bind(this)}>
              <Text style={styles.normalText}>新用户注册</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  closeBox: {
    width: 32,
    height: 32,
    position: 'absolute',
    top: 23.5,
    left: 23.5
  },
  closeIcon: {
    width: '100%',
    height: '100%',
  },
  loginIconBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginIcon: {
    width: 107,
    height: 162,
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 42,
    paddingBottom: 42,
    paddingLeft: 32.5,
    paddingRight: 32.5,
  },
  loginBtn: {
    width: '100%',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: '#ff5a60'
  },
  subBtn: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  normalBtn: {
    flex: 1,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff'
  },
  normalText: {
    color: '#ffffff',
    fontSize: 16,
  },
  wechatBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wechatIcon: {
    width: 23,
    height: 18,
    marginRight: 5
  },
  registerBtn: {
    marginLeft: 10,
  }

});
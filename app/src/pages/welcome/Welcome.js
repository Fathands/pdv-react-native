/*
 * @Author: Aiden
 * @Date: 2019-05-28 22:08:42
 * @LastEditors: Aiden
 * @LastEditTime: 2019-08-15 00:04:46
 * @Description: file content
 */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { Button } from 'native-base';
import ViewPager from '@react-native-community/viewpager';
import LottieView from 'lottie-react-native';
import { storeData, getData } from '../../services/async-storage.service';

const devWidth = Dimensions.get('window').width;

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentSource: 0,
      LottieViewSource: [
        require('../../assets/json/page_one.json'),
        require('../../assets/json/page_two.json'),
        require('../../assets/json/page_three.json')
      ]
    };
  }

  onPageSelected(event) {
    const { nativeEvent } = event;
    const { position } = nativeEvent;
    this.setState({
      currentSource: position
    });
  }

  goVisa() {
    getData('welcome', 'visited').then(res => {
      if (res === 'YES') {
        this.props.navigation.navigate('Visa');
      } else {
        storeData('welcome', 'visited', 'YES');
      }
    });
  }

  render() {

    const getDotStyle = (index) => {
      return (index === 0 ? styles.dotItem : { ...styles.dotItem, ...{ marginLeft: 12 }});
    };

    const getDotActiveStyle = (style, index) => {
      if (this.state.currentSource === index) {
        return { ...style, ...styles.dotActived };
      }
      return style;
    };

    return (
      <View style={styles.container}>

        {
          this.state.LottieViewSource.map((source, sIndex) => {
            return (
              <LottieView
                source={source}
                autoPlay
                loop
                key={sIndex}
                style={styles.lottieView}
              />
            );
          }).filter((item, index) => index === this.state.currentSource)
        }

        <ViewPager
          onPageSelected={this.onPageSelected.bind(this)}
          style={styles.viewPager}
          initialPage={0}>

          <View key="1" style={styles.pageItem}>
            <Text style={{ ...styles.textStyle, ...styles.textStrong }}>手机拍摄证件照</Text>
            <Text style={styles.textStyle}>自动填表传资料</Text>
          </View>

          <View key="2" style={styles.pageItem}>
            <Text style={{ ...styles.textStyle, ...styles.textStrong }}>进度实时追踪</Text>
            <Text style={styles.textStyle}>保障出签时间</Text>
          </View>

          <View key="3" style={styles.pageItem}>
            <Text style={{ ...styles.textStyle, ...styles.textStrong }}>超高出签率</Text>
            <Text style={styles.textStyle}>拒签退全款</Text>
            <Button bordered style={styles.button} onPress={this.goVisa.bind(this)}>
              <Text style={styles.buttonText}>立即打开</Text>
            </Button>
          </View>
        </ViewPager>

        <View style={styles.dotBox}>
          {
            [0, 1, 2].map((dot, DIndex) => {
              return (
                <View
                  style={getDotActiveStyle(getDotStyle(DIndex), DIndex)}
                  key={DIndex}>
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lottieView: {
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: '#ff7378',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPager: {
    height: 185,
    width: devWidth,
    marginTop: 60,
  },
  pageItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: '#ffd0d2',
    lineHeight: 50,
  },
  textStrong: {
    fontWeight: '600',
    color: '#ffffff',
  },
  button: {
    width: 240,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  dotBox: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    height: 10,
    width: 50,
  },
  dotItem: {
    width: 8,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, .3)',
    borderRadius: 8,
  },
  dotActived: {
    backgroundColor: '#ffffff',
  }
});

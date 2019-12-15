import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";
import { SQL } from '../utils/sqlite';

export default class Welcome extends Component {
  async componentDidMount() {
    // 如果usr不存在，无论如何跳转到登录页，就是第一次登录的情况
    // 如果usr存在，则看auth，auth===1则自动登录跳转到‘Main’，否则还是要登录
    let nav = 'Sign';
    let usr = await AsyncStorage.getItem('usr');
    let authResult = await SQL('SELECT * FROM login');
    let auth = authResult.rows.item(0).auth;
    console.log(`auth: ${auth}`)

    auth === 1 ? null : usr = null
    this.timer = setTimeout(() => {
      usr ? nav = 'Main' : null
      NavigationUtil.goPage({
        navigation: this.props.navigation
      }, nav)
    }, 500)
  }

  render() {
    return (
      <View style={{ felx: 1, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text style={{ fontSize: 25, color: '#333' }}>Welcome to the app!</Text>
      </View>
    );
  }
}

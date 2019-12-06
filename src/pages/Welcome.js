import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";

export default class Welcome extends Component {
  componentDidMount() {
    let nav = 'Sign'
    AsyncStorage.getItem('usr')
      .then(value => {
        this.timer = setTimeout(() => {
          value ? nav = 'Main' : null
          NavigationUtil.goPage({
            navigation: this.props.navigation
          }, nav)
        }, 500)
      })
  }

  render() {
    return (
      <View style={{ felx: 1, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text style={{ fontSize: 25, color: '#333' }}>Welcome to the app!</Text>
      </View>
    );
  }
}

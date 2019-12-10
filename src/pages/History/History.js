import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class History extends Component {
  render() {
    return (
      <View></View>
    );
  }
}

export default HistoryStack = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: ({ navigation }) => ({
      title: '历史',
    })
  }
});

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Weather extends Component {
  render() {
    return (
      <View>
        <Text>Weather</Text>
      </View>
    );
  }
}

export default WeatherStack = createStackNavigator({
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }) => ({
      title: '天气',
    })
  }
});

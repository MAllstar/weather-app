import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class History extends Component {
  state = {
    historyDay: 7
  };

  async componentDidMount() {
    let historyDay = await AsyncStorage.getItem('historyDay')
    if (historyDay) this.setState({ historyDay })
  }

  render() {
    return (
      <View><Text>{this.state.historyDay}</Text></View>
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

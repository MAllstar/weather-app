import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
// import {} from 'react-native-baidumap-sdk';

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Map</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default MapStack = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      title: '地图',
    })
  }
});

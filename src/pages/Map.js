import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,

  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Dimensions,
  NativeModules
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { BaiduMapManager, MapView, MapTypes, Geolocation, Overlay, MapApp } from 'react-native-baidu-map';

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

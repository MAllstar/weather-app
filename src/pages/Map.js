import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import MapView from 'react-native-maps';

class Map extends Component {
  render() {
    return (
      <View>
        <Text>Map</Text>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

export default MapStack = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      title: '地图',
    })
  }
});

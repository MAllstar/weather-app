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
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { BaiduMapManager, MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';

BaiduMapManager.initSDK("C3CjoByz3moD15i4O3Dr1ymqkE8LmYg6");
const { height, width } = Dimensions.get('window');

class Map extends Component {
  state = {
    location: {},
    // center: { longitude: 113.950453, latitude: 22.546045 },
    center: { longitude: 120.019152, latitude: 30.295559 },
  };

  componentDidMount() {
    this.getCurrentPosition()
  };

  getCurrentPosition() {                        // 获取当前定位
    Geolocation.getCurrentPosition()
      .then((data) => {
        this.setState({ location: data, center: data });
      });
  };

  handleChangeLocation = (location) => {
    let SZDX = { longitude: 113.950453, latitude: 22.544045 };
    let HZNU = { longitude: 120.019152, latitude: 30.295559 };
    let London = { longitude: -0.171877, latitude: 51.496431 };
    if (location === '深圳大学') this.setState({ center: SZDX, location: SZDX });
    else if (location === '杭州师范大学') this.setState({ center: HZNU, location: HZNU });
    else if (location === '伦敦') this.setState({ center: London, location: London });
  };

  render() {
    const { location, center } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            // contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <MapView
                showsUserLocation={true}
                locationData={location}
                width={width}
                height={height * 0.65}
                zoom={18}
                trafficEnabled={true}
                zoomControlsVisible={true}
                mapType={MapTypes.NORMAL}
                center={center}
              >
              </MapView>
              <View style={styles.buttonGroup}>
                <Button onPress={() => this.handleChangeLocation('深圳大学')} title="深圳大学" />
                <Button onPress={() => this.handleChangeLocation('杭州师范大学')} title="杭州师范大学" />
                <Button onPress={() => this.handleChangeLocation('伦敦')} title="伦敦" />
              </View>
              <View style={styles.location}>
                <Text>{`latitude: ${location.latitude}, longitude: ${location.longitude}`}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  location: {
    paddingLeft: 16,
  },
  buttonGroup: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default MapStack = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      title: '地图',
    })
  }
});

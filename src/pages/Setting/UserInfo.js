import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  Text,
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../../components/common/HeaderRightMenu';

class MyUserInfo extends Component {
  state = {
    usr: 'please sign up!'
  };

  componentDidMount() {
    AsyncStorage.getItem('usr')
      .then(usr => this.setState({ usr }))
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontStyle: 'italic' }}>Hello, {this.state.usr}</Text>
        <Text style={{ fontSize: 20 }}>点击右上角图标打开侧栏</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserInfo = createStackNavigator({
  MyUserInfo: {
    screen: MyUserInfo,
    navigationOptions: ({ navigation }) => ({
      title: '用户资料',
      headerRight: <HeaderRightMenu navigation={navigation} />
    })
  }
});

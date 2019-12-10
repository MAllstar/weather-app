import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../../components/common/HeaderRightMenu';
import Sign from '../../utils/Sign';

class MySignOut extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Button
          bordered
          danger
          onPress={() => Sign.appSignOut(navigation)}>
          <Text style={{ color: '#f60', paddingLeft: 10, paddingRight: 10 }}>Sign Out</Text>
        </Button>
      </View>
    );
  }
}

export default SignOut = createStackNavigator({
  MySignOut: {
    screen: MySignOut,
    navigationOptions: ({ navigation }) => ({
      title: '退出登录',
      headerRight: <HeaderRightMenu navigation={navigation} />
    })
  }
});

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { Radio } from 'native-base';

import HeaderRightMenu from '../../components/common/HeaderRightMenu';
import Sign from '../../utils/Sign';
import { SQL } from '../../utils/sqlite';

class MySignOut extends Component {
  state = {
    selected: true,
  };

  async componentDidMount() {
    let authResult = await SQL('SELECT * FROM login');
    this.setState({ selected: authResult.rows.item(0).auth === 1 ? true : false });
  }

  handleClickRadio = async () => {
    let { selected } = this.state;
    await SQL(`UPDATE login set auth=${selected ? 0 : 1}`);
    this.setState({ selected: !selected });
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: 16, marginRight: 5 }}>下次自动登录</Text>
          <Radio
            selected={this.state.selected}
            selectedColor='tomato'
            onPress={this.handleClickRadio} />
        </View>
        <Button
          bordered
          danger
          onPress={() => Sign.appSignOut(navigation)}>
          <Text style={{ color: '#f60', paddingLeft: 10, paddingRight: 10 }}>退出登录</Text>
        </Button>
      </View>
    );
  }
}

export default SignOut = createStackNavigator({
  MySignOut: {
    screen: MySignOut,
    navigationOptions: ({ navigation }) => ({
      title: '登录设置',
      headerRight: <HeaderRightMenu navigation={navigation} />
    })
  }
});

import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  StyleSheet,
  TextInput,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Text } from 'native-base';

import HeaderRightMenu from '../../components/common/HeaderRightMenu';

class MyUserInfo extends Component {
  state = {
    usr: 'please sign in!',
    pwd: '******',
    inChange: false,
  };

  componentDidMount() {
    AsyncStorage.getItem('usr')
      .then(usr => this.setState({ usr }))
    AsyncStorage.getItem('pwd')
      .then(pwd => this.setState({ pwd }))
  };

  handleClickPwd = () => {
    this.setState({ inChange: !this.state.inChange })
  };

  handleBlurInput = async () => {
    this.handleClickPwd()
    await AsyncStorage.setItem('pwd', this.state.pwd);
    alert('密码已更改！')
  }

  render() {
    let { usr, pwd, inChange } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontStyle: 'italic' }}>Hello, {usr}</Text>
        <Text style={{ fontSize: 20 }}>点击右上角图标查看更多设置</Text>
        <Text style={{ fontSize: 20 }}>点击下方修改当前密码</Text>
        {
          inChange ?
            (
              <TextInput
                style={styles.textInput}
                placeholder={pwd}
                value={pwd}
                placeholderTextColor='#d9d9d9'
                onChangeText={(pwd) => this.setState({ pwd })}
                autoFocus
                onBlur={this.handleBlurInput}
              />
            ) : (
              <Button onPress={this.handleClickPwd} style={styles.btn}>
                <Text>{pwd}</Text>
              </Button>
            )
        }
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
  btn: {
    marginVertical: 10,
    backgroundColor: 'tomato'
  },
  textInput: {
    height: 35,
    borderBottomWidth: 1,
    borderColor: 'tomato'
  }
});

export default UserInfo = createStackNavigator({
  MyUserInfo: {
    screen: MyUserInfo,
    navigationOptions: ({ navigation }) => ({
      title: '用户信息',
      headerRight: <HeaderRightMenu navigation={navigation} />
    })
  }
});

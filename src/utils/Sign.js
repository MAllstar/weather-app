import { Alert, AsyncStorage, ToastAndroid } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'

export default class Sign {
  static async appSignIn(navigation, usr, pwd) {
    await AsyncStorage.setItem('usr', usr)
    await AsyncStorage.setItem('pwd', pwd)

    fetch('http://47.106.124.118:11111/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usr: usr,
        pwd: pwd,
      }),
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson)
        Alert.alert('登录成功！')
        ToastAndroid.show(`response result: ${resJson.result.toString()}`, ToastAndroid.LONG)
        navigation.navigate('Main')
      })
      .catch(err => console.log(err))
  }

  static async appSignOut(navigation) {
    await AsyncStorage.removeItem('usr')
    await AsyncStorage.removeItem('pwd')
    Alert.alert('退出成功！')
    navigation.navigate('Sign')
  }
}

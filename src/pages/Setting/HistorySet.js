import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderRightMenu from '../../components/common/HeaderRightMenu';
import Dropdown from '../../components/common/Dropdown';

const dayNumberData = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 7 },
];

class MyHistorySet extends Component {
  state = {
    dayNumber: 7,
  };

  handleChangeDayNumber = async (value) => {
    this.setState({ dayNumber: value })
    await AsyncStorage.setItem('historyDay', value.toString())
    ToastAndroid.show(`当前可查看近${value}天的历史天气`, ToastAndroid.SHORT)
  }

  render() {
    return (
      <View style={styles.container}>
        <Dropdown
          value={this.state.dayNumber}
          data={dayNumberData}
          handleChangeDayNumber={this.handleChangeDayNumber}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
  }
});

export default HistorySet = createStackNavigator({
  MyHistorySet: {
    screen: MyHistorySet,
    navigationOptions: ({ navigation }) => ({
      title: '历史页面',
      headerRight: <HeaderRightMenu navigation={navigation} />
    })
  }
});

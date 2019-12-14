import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SQLite from 'react-native-sqlite-storage';

class History extends Component {
  constructor(props) {
    super(props);
    const db = SQLite.openDatabase(
      {
        name: 'WeatherApp.db',
        location: 'default',
        createFromLocation: '~www/WeatherApp.db'
      },
      () => console.log('SQLite connection succeeded!'),
      err => console.log(err)
    );
    this.state = {
      db,
      historyDay: 7
    }
  }

  async componentDidMount() {
    let historyDay = await AsyncStorage.getItem('historyDay')
    if (historyDay) this.setState({ historyDay })
    let { db } = this.state;
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM history;', [], (tx, result) => {
        console.log("Query completed");
        console.log(result)
      })
    })
  }

  render() {
    return (
      <View><Text>{this.state.historyDay}</Text></View>
    );
  }
}

import HeaderRightInfo from '../../components/common/HeaderRightInfo';

export default HistoryStack = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: ({ navigation }) => ({
      title: '历史',
      headerRight: <HeaderRightInfo />
    })
  }
});

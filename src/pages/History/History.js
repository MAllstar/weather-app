import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SQLite from 'react-native-sqlite-storage';
import { Container, Content, Card, CardItem, Text } from 'native-base';

class History extends Component {
  constructor(props) {
    super(props);
    const db = SQLite.openDatabase(
      {
        name: 'Weather.db',
        location: 'default',
        createFromLocation: '~www/Weather.db'
      },
      () => console.log('SQLite connection succeeded!'),
      err => console.log(err)
    );
    this.state = {
      db,
      historyDay: 7,
      data: null,
    }
  }

  async componentDidMount() {
    let historyDay = await AsyncStorage.getItem('historyDay')
    if (historyDay) this.setState({ historyDay })
    let { db } = this.state;
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM history;', [], (tx, result) => {
        console.log("Query completed");
        // console.log(JSON.stringify(result))
        console.log(result.rows)
        this.setState({ data: JSON.stringify(result.rows) })
      })
    })
  }

  render() {
    return (
      <View style={{ felx: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Text>{this.state.data}</Text>
        </View>
      </View>
    );
  }
}

function WeatherList(props) {
  return (
    <Container>
      <Content>
        <Card>
          {
            props.data.map((value, index) => {
              return (
                <CardItem>
                  <Octicons name="primitive-dot" size={20} color='tomato' />
                  <Text style={{ marginLeft: 10 }}>{`${value.type}:`}</Text>
                  <Text style={{ marginLeft: 10 }}>{value.value}</Text>
                </CardItem>
              )
            })
          }
        </Card>
      </Content>
    </Container>
  )
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

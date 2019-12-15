import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Content, Card, CardItem, Text } from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';

import { SQL } from '../../utils/sqlite';

class History extends Component {
  state = {
    historyDay: 7,
    data: [],
  }

  async componentDidMount() {
    let dayResult = await SQL('SELECT * FROM historyDay');
    let historyDay = dayResult.rows.item(0).day;
    console.log(`historyDay: ${historyDay}`)
    this.setState({ historyDay });

    let dataResult = await SQL('SELECT * FROM history');
    let data = [];
    for (let i = 0; i < historyDay; i++) {
      data.push(dataResult.rows.item(i))
    }
    console.log(data)
    this.setState({ data });
  }

  render() {
    return (
      <View style={{ felx: 1 }}>
        <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <WeatherList data={this.state.data} />
        </ScrollView>
      </View>
    );
  }
}

function WeatherList(props) {
  const typeMap = new Map([['AP', '气压'], ['SD', '湿度'], ['WD', '风向'], ['WS', '风力'], ['temp', '气温']]);
  return (
    <View style={{ marginBottom: 15 }}>
      {
        props.data.map((value, index) => {
          return (
            <Content>
              <Text>{value.date}</Text>
              <Card>
                {
                  Object.keys(value).map((v, i) => {
                    return (
                      v !== 'id' && v !== 'date' ?
                        <CardItem>
                          <Octicons name="primitive-dot" size={20} color='tomato' />
                          <Text style={{ marginLeft: 10 }}>{`${typeMap.get(v)}:`}</Text>
                          <Text style={{ marginLeft: 10 }}>{value[v]}</Text>
                        </CardItem> : null
                    )
                  })
                }
              </Card>
            </Content>
          )
        })
      }
    </View>
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

// [{"AP": "1000.3hPa", "SD": "81%", "WD": "东北风", "WS": "小于3级", "date": "2019/12/10", "id": 1, "temp": "13度"}, {"AP": "1003.3hPa", "SD": "68%", "WD": "西北 
// 风", "WS": "小于4级", "date": "2019/12/11", "id": 2, "temp": "7度"}, {"AP": "1004.1hPa", "SD": "62%", "WD": "西北风", "WS": "小于4级", "date": "2019/12/12", "id": 4, 
// "temp": "6度"}, {"AP": "1001.1hPa", "SD": "77%", "WD": "东南风", "WS": "小于3级", "date": "2019/12/13", "id": 5, "temp": "9度"}, {"AP": "1000.1hPa", "SD": "80%", "WD": "东南风", "WS": "小于3级", "date": "2019/12/14", "id": 6, "temp": "10度"}, {"AP": "1000.1hPa", "SD": "86%", "WD": "东北风", "WS": "小于3级", "date": "2019/12/15", "id": 7, "temp": "13度"}, {"AP": "999.2hPa", "SD": "89%", "WD": "东北风", "WS": "小 
// 于4级", "date": "2019/12/16", "id": 8, "temp": "16度"}]

// db.transaction(tx => {
//   tx.executeSql(`INSERT OR REPLACE INTO historyDay(day) VALUES(1)`, [], (tx, result) => {})
// })
// db.transaction(tx => {
//   tx.executeSql(`UPDATE historyDay set day=2`, [], (tx, result) => {})
// })
// db.transaction(tx => {
//   tx.executeSql(`DELETE FROM historyDay WHERE day = 1`, [], (tx, result) => {})
// })
// db.transaction(tx => {     // 建表
//   tx.executeSql(`CREATE TABLE IF NOT EXISTS historyDay (
//     day	INTEGER NOT NULL DEFAULT 7 UNIQUE
//   )`, [], () => console.log('createTable executeSql success'))
// })
// db.transaction(tx => {
//   tx.executeSql('SELECT * FROM historyDay;', [], (tx, result) => {
//     let arr = [];
//     for (let i = 0; i < result.rows.length; i++) {
//       arr.push(result.rows.item(i))
//     }
//   })
// })

// DROP TABLE ${tableName}  删表
// SELECT * FROM ${tableName} WHERE ${key} = ${value} 查询
// DELETE FROM ${tableName} WHERE ${key} = ${value} 删数据
// db.transaction(tx => {     // 建表
//   tx.executeSql(`CREATE TABLE IF NOT EXISTS historyDay (
//     day	INTEGER NOT NULL DEFAULT 7
//   )`, [], () => console.log('createTable executeSql success'))
// })
// INSERT OR REPLACE INTO historyDay(${key},) VALUES(${value},) 插入或替换数据

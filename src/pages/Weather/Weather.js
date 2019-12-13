import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Tab, Tabs } from 'native-base';

import Today from './Today';
import Recommen from './Recommen';

class Weather extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading='今日'
            tabStyle={{
              backgroundColor: '#f7f4ed',
            }}
            activeTabStyle={{
              backgroundColor: 'tomato',
            }} >
            <Today />
          </Tab>
          <Tab
            heading='推荐'
            tabStyle={{
              backgroundColor: '#f7f4ed',
            }}
            activeTabStyle={{
              backgroundColor: 'tomato',
            }} >
              <Recommen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

import HeaderRightInfo from '../../components/common/HeaderRightInfo';

export default WeatherStack = createStackNavigator({
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }) => ({
      title: '天气',
      headerRight: <HeaderRightInfo />
    })
  }
});

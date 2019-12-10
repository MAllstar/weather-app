import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Tab, Tabs } from 'native-base';

import Today from './Today';
import Recommen from './Recommen';
import AAA from './AAA';

class Weather extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading='头条'
            tabStyle={{
              backgroundColor: '#f7f4ed',
            }}
            activeTabStyle={{
              backgroundColor: 'tomato',
            }} >
            <Today />
          </Tab>
          <Tab
            heading='娱乐'
            tabStyle={{
              backgroundColor: '#f7f4ed',
            }}
            activeTabStyle={{
              backgroundColor: 'tomato',
            }} >
              <Recommen />
          </Tab>
          <Tab
            heading='体育'
            tabStyle={{
              backgroundColor: '#f7f4ed',
            }}
            activeTabStyle={{
              backgroundColor: 'tomato',
            }} >
              <AAA />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default WeatherStack = createStackNavigator({
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }) => ({
      title: '天气',
    })
  }
});

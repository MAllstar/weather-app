import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';

class Weather extends Component {
  state = {
    active: false
  };

  handleChangeTabsActive = () => {
    console.log(1)
    this.setState({ active: !this.state.active });
  };

  render() {
    let { active } = this.state;
    return (
      <Container>
        <Tabs>
          <Tab heading={
            <TabHeading style={{ backgroundColor: active ? '#fff' : 'tomato' }}>
              <Text>今日</Text>
            </TabHeading>
          }>
            <Text>123</Text>
          </Tab>
          <Tab onPress={this.handleChangeTabsActive} heading={
            <View onPress={this.handleChangeTabsActive}>
              <TabHeading
                style={{ backgroundColor: active ? 'tomato' : '#fff' }}>
                <Text>推荐</Text>
              </TabHeading>
            </View>
          }>
            <Text>321</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});

export default WeatherStack = createStackNavigator({
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }) => ({
      title: '天气',
    })
  }
});

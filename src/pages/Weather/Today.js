import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';

export default class Today extends Component {
  state = {
    curCityData: [],
  };

  async componentDidMount() {
    try {
      let res = await fetch(`http://www.weather.com.cn/data/sk/101210101.html`);
      let resJson = await res.json();
      console.log(JSON.stringify(resJson, null, 2))
      let info = resJson.weatherinfo;
      let data = [
        { type: '气温', value: `${info.temp}度` },
        { type: '湿度', value: info.SD },
        { type: '气压', value: info.AP },
        { type: '风向', value: info.WD },
        { type: '风力', value: info.WS },
      ];
      this.setState({ curCityData: data });
    } catch (err) {
      console.log(err)
      alert('天气数据请求失败！')
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Octicons name="location" size={20} color='tomato' />
            <Text style={{ marginLeft: 10 }}>杭州</Text>
          </View>
          <Image style={{ width: '100%', height: 200 }} source={{ uri: 'https://www.hznu.edu.cn/upload/resources/image/2019/02/25/7493125.jpg' }} />
          <WeatherList data={this.state.curCityData} />
        </ScrollView>
      </View>
    );
  }
}

function WeatherList(props) {
  let { data } = props;
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

const styles = StyleSheet.create({
});

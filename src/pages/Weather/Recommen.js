import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class Recommen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <QRCode
              value="http://www.hznu.edu.cn"
              size={200}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text>温馨提示：昼夜温差较大，较易发生感冒，请适当增减衣服。体质较弱的朋友请注意防护。</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

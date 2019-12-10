import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

export default class Recommen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }} />
        <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://images.freeimages.com/images/large-previews/b10/can-t-look-over-1312680.jpg' }} />
      </View>
    );
  }
}

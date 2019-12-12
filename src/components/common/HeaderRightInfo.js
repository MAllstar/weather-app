import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HeaderRightInfo extends React.Component {
  state = {
    usr: null
  };

  async componentDidMount() {
    let usr = await AsyncStorage.getItem('usr')
    this.setState({ usr })
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Ionicons name='md-contact' color='tomato' style={styles.headerRightInfoIcon} />
        <Text style={styles.text}>{this.state.usr}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerRightInfoIcon: {
    fontSize: 30,
  },
  text: {
    marginTop: -1,
    fontSize: 20,
    marginHorizontal: 10,
  }
});

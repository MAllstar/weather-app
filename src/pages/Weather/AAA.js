import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Radio } from 'native-base';

export default class AAA extends Component {
  state = { load: true, selected: false };

  handleChangeLoad = () => this.setState({ load: !this.state.load });
  handleChangeSelect = () => this.setState({ selected: !this.state.selected });

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Button title='Load Fragment' onPress={this.handleChangeLoad} />
        <View style={{ display: this.state.load ? 'flex' : 'none', marginTop: 10, marginLeft: 10 }}>
          <Text>以下是Fragment中的内容</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Radio selected={this.state.selected} onPress={this.handleChangeSelect} /><Text>复选框测试</Text>
          </View>
          <TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 10 }} activeOpacity={0.3} focusedOpacity={0.5}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    color: '#333',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ddd',
  }
});

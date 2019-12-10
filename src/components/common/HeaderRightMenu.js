import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HeaderRightMenu extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
        <Ionicons name='md-menu' color='#333' style={styles.headerRightMenuIcon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  headerRightMenuIcon: {
    fontSize: 45,
    width: 25,
    marginRight: 10,
  },
});

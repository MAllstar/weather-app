import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

export default class Today extends Component {
  render() {
    return (
      <View style={styles.viewLayout}>
        <FlatList
          data={[
            { key: 'Item1' },
            { key: 'Item2' },
            { key: 'Item3' },
            { key: 'Item4' },
          ]}
          renderItem={({ item }) =>
            <Text
              style={styles.flatListText}
              key={item.key}
              onPress={() => alert(item.key)}
            >{item.key}</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	viewLayout: {
		marginTop: 10,
	},
	flatListText: {
		paddingLeft: 10,
		fontSize: 22,
		height: 44,
		lineHeight: 44,
		borderBottomWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#eee',
	},
});

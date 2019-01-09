import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})
export default Home

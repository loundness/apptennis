import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>SignUp Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})
export default SignUp

import React from 'react'
import Navigation from './Navigation/Navigation'
import { StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";


import Navigation from './Components/Navigation/Navigation';
import HomeScreen from './Components/Navigation/Navigation';
import SignInScreen from './Components/Navigation/Navigation';
import SignUpScreen from './Components/Navigation/Navigation';



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);

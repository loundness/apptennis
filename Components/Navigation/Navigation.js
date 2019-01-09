import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';


import HomeScreen from '../Screens/HomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignupScreen from '../Screens/SignUpScreen';



var StackNavigator = createStackNavigator({
  Home: HomeScreen,
  SignIn: SigninScreen,
  SignUp: SignupScreen,
},{headerMode: "none"})

export default Navigation = createAppContainer(StackNavigator);


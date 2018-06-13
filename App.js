import React, { Component } from 'react';
import {
 StatusBar,
 View,
 Text,
 StyleSheet
} from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';

import login from './components/login';
import signupOne from './components/signupOne';
import signupTwo from './components/signupTwo';
import otp from './components/otp';
import landing from './components/landing';
import home from './components/home';

const RootStack = createStackNavigator(
  {
    home:{
      screen: home,
    },
    signupOne:{
      screen: signupOne,
    },
    signupTwo:{
      screen: signupTwo,
    },
    landing:{
      screen: landing,
    },
    login:{
      screen: login,
    },
    otp:{
      screen: otp,
    }
  },
  {
    initialRouteName: 'home',
    navigationOptions:{
      header: null,
    }
  }
);
type Props = {};
export default class App extends Component<Props> {
 render() {
   return <RootStack />

 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,Dimensions,
} from 'react-native';

const height = Dimensions.get('window').height
type Props = {};

import login from './login';
import signupOne from './signupOne';

export default class home extends Component<Props> {
  state = {background:'yellow'}
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.narrow}>
          <Image source={require('../assets/logo.png')} />
            <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() =>this.props.navigation.navigate('signupOne')}>
              <Text style={styles.font}>
                 SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style = {styles.button} onPress={() =>this.props.navigation.navigate('login')}>
              <Text style={styles.font}>
               SIGN IN
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
 narrow: {
    backgroundColor: '#fce76c',
    width: 180,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
 },
 button: {
    borderWidth: 2,
    width:130,
    alignItems:'center',
    borderColor:'black',
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
 },
 font: {
  fontFamily:'Robot-Regular.ttf',
  color:'black',
  fontWeight: '600',
 },
});

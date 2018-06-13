import React, { Component } from 'react';
import {
 StatusBar,
 View,
 Text,
 StyleSheet
} from 'react-native';

export default class otp extends Component<Props>{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> Welcome </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text:{
    fontSize: 25,
  }
});

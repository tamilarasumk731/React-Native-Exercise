/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Linking,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

type Props = {};
export default class login extends Component<Props> {
  state = {
  Email: null,
  password: null
}
  render() {
    return (
      <View style={styles.container}>
         <Image source={require('../assets/combined_shape.png')} style={styles.backimg}/>
              <Text style={styles.welcome}>
          Login
        </Text>
        <View style={styles.yellowrect}>

           <Image source={require('../assets/mail.png')} style={styles.mail}/>
           <Image source={require('../assets/lock.png')} style={styles.passw}/>
           <TextInput style = {styles.input}

               underlineColorAndroid = "transparent"
               placeholder = "Email"
               onChangeText={(Email)=>this.setState({Email})} value={this.state.Email}/>
            <TextInput style = {styles.input}

               underlineColorAndroid = "transparent"
               placeholder = "Password" secureTextEntry={true}
               onChangeText={(password)=>this.setState({password})} value={this.state.password}/>

        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
           <Text style={styles.textButton}> Continue </Text>

        </TouchableOpacity>
        <TouchableOpacity
               style = {styles.forgotButton}>
               <Text style = {styles.forgotButtonText} onPress={() => Linking.openURL('https://www.google.com')}> Forgot password </Text>
       </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#ffffff',
  },
  cont:{
   flex:1,
    backgroundColor: '#ffffff'
  },
  backimg:{
      alignSelf:'flex-start',
  },
  welcome: {
    fontWeight:'bold',
    color:'#000',
    fontSize: 20,
    textAlign: 'center',
    marginTop:100,
    marginBottom:50,

  },
  yellowrect:{
   backgroundColor: '#fce76c',
   height: 300,
   flex: 1,
   flexWrap: 'nowrap',
   width: 300,
  },
  input:{
   padding: 10,
   width:250,
   alignSelf: 'flex-end',
   borderColor: '#A9A9A9',
   borderBottomWidth: 2,
   marginTop: 10,
 },
  textButton:{
   fontSize: 20,
   textAlign: 'center',
 },
 button:{
   marginTop: 20,
   width: 150,
   alignSelf: 'center',
   padding: 10,
   borderRadius: 30,
   borderStyle: 'solid',
   borderWidth: 2,
   marginBottom: 40,
   borderColor: '#000',
 },
    forgotButtonText:{
        textAlign:'center',

        marginBottom:10,
    },
    backimg: {
    padding: 10,
    alignSelf:'flex-start',
    marginTop: 15,
    height: 25,
    width: 25,
    resizeMode : 'stretch',

},
mail:{
  padding: 10,

    top: 70,
    left:10,
    height: 20,
    width: 25,
    },
passw:{
  padding: 10,
    left:10,
    top: 108,
    height: 20,
    width: 25,
}

});

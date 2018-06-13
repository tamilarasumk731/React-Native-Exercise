'use strict';

import React, { Component } from 'react';
import {
 Platform,
 StyleSheet,
 Text,
 View,
 Image,
 TextInput,
 TouchableOpacity,
 ImageBackground,
 Keyboard,
 ToastAndroid
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import signupTwo from './signupTwo';


type Props = {};

export default class App extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      nameValidate: true,
      email: '',
      emailValidate: true,
      password: '',
      passValidate: true,
      errName: 'Enter only characters',
    }
  }

  validate(text,type){
    var alph = /^[a-zA-z]+$/
    var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$#!%*?&])[A-Za-z\d$#@$!%*?&]{6,}/
    var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(type=='username'){
      if(alph.test(text))
        this.setState({nameValidate: true,})
      else
        this.setState({nameValidate: false,})
    }
    else if(type=='password'){
      if(pass.test(text))
        this.setState({passValidate: true,})
      else
        this.setState({passValidate: false,})
    }
    else if(type=='email'){
      if(mail.test(text))
        this.setState({emailValidate: true,})
      else
        this.setState({emailValidate: false,})
    }
  }

  submitForm(){
    Keyboard.dismiss()
    ToastAndroid.show('Form Submission Success', ToastAndroid.SHORT);
  }


 render() {
   const {navigation} = this.props;
   return(
     <KeyboardAwareScrollView style={styles.container}>
        <Text style={styles.heading}> Create Account </Text>
        <View style={styles.yellow}>

            <TextInput
               underlineColorAndroid='#fce76c'
               placeholder="Name"
               value={this.setState.name}
               style ={[styles.input1,!this.state.nameValidate?styles.error:null]}
               onChangeText="{(text)=>this.validate(text,'username')};"
               autoFocus = {true}
               returnKeyType = { "next" }
               onSubmitEditing={() => { this.Email.focus(); }}
               blurOnSubmit={false} />
          <TextInput
             underlineColorAndroid='#fce76c'
             placeholder="Email"
             value={this.setState.email}
             style ={[styles.input,!this.state.emailValidate?styles.error:null]}
             returnKeyType = {"next"}
             ref={(input) => { this.Email = input; }}
             onSubmitEditing={() => { this.Password.focus(); }}
             onChangeText="{(text)=>this.validate(text,'email')} ;"
             blurOnSubmit={false} />
          <TextInput
             underlineColorAndroid='#fce76c'
             secureTextEntry={true}
             returnKeyType = {"go"}
             placeholder="Password"
             ref={(input) => { this.Password = input; }}
             style ={[styles.input,!this.state.passValidate?styles.error:null]}
             onSubmitEditing={this.submitForm}
             onChangeText="{(text)=>this.validate(text,'password')}; "
             blurOnSubmit={false} />
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={() => this.props.navigation.navigate('signupTwo')}>
           <Text style={styles.textButton}> Continue </Text>

        </TouchableOpacity>

        <Text style={styles.terms}> Terms & Conditions </Text>
     </KeyboardAwareScrollView>
   );
 }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backgroundImage:{
    width: 30,
    height: 30,
  },
  heading:{
    marginTop: 100,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  yellow:{
    backgroundColor: '#fce76c',
    height: 300,
    flex: 1,
    flexWrap: 'nowrap',
  },
  imageStyle:{
    height: 150,
    width: 150,
    marginTop: 60,
    alignSelf: 'center',
  },
  input1:{
    padding: 10,
    width:250,
    alignSelf: 'flex-end',
    borderColor: '#a9a9a9',
    borderBottomWidth: 2,
    marginTop: 80,
  },
  input:{
    padding: 10,
    width:250,
    alignSelf: 'flex-end',
    borderColor: '#a9a9a9',
    borderBottomWidth: 2,
    marginTop: 10,
  },
  textButton:{
    fontSize: 20,
    color: '#000',
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
  terms:{
    textAlign: 'center',
    color: '#a9a9a9',
    fontSize: 15,
  },
  error:{
    borderBottomWidth: 2,
    borderColor: '#ff0000',
  }
});

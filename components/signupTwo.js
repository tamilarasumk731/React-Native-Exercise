'use strict';

import React, { Component } from 'react';
import {
Platform,
StyleSheet,
Text,
View,
Image,
TextInput,
TouchableOpacity
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import landing from './landing';

type Props = {};

export default class App extends Component<Props>{
render() {
   const {navigation} = this.props;
  return (
    <Form />
  );
}
}

class Form extends Component<Props>{
 constructor(props){
   super(props);
   this.state = {
     codeValidate: true,
     phoneValidate: true
   };
 }

 validate(text,type){
   if(type=='country_code'){
     var code_nums = /^[0-9]{1,3}$/
     if(code_nums.test(text)){
       this.setState({codeValidate: true,})
     }
     else
       this.setState({codeValidate: false})
   }
   if(type=='phone_number'){
     var phone_nums = /^[0-9]{7,12}$/
     if(phone_nums.test(text)){
       this.setState({phoneValidate: true,})
     }
     else
       this.setState({phoneValidate: false})
   }
 }


 render(){
   return(

     <KeyboardAwareScrollView style={styles.container}>
        <Image source={require('../assets/back_button.png')} style={styles.backButton}/>
        <Text style={styles.heading}> Create Account </Text>
        <View style={styles.yellow}>
          <TextInput underlineColorAndroid='#fce76c' placeholder="Country Code" returnKeyType="next" onSubmitEditing={() => { this.phoneNumber.focus(); }} keyboardType='numeric' style ={[styles.input1,!this.state.codeValidate?styles.error:null]} autoFocus = {true} onChangeText={(text)=>this.validate(text,'country_code')} blurOnSubmit={false}/>
          <TextInput underlineColorAndroid='#fce76c' placeholder="Phone Number" returnKeyType="go" ref={(input) => { this.phoneNumber = input; }} keyboardType='numeric' style ={[styles.input,!this.state.phoneValidate?styles.error:null]} onChangeText={(text)=>this.validate(text,'phone_number')}  blurOnSubmit={false}/>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={() =>this.props.navigation.navigate('landing')}>
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
 backButton:{
  width:20,
  height:20,
  left:25,
  top:25
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
   width: 375,
   alignItems:'center'
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

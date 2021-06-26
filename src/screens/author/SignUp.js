import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  TextInput, 
  TouchableOpacity, 
  StatusBar, 
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import ModalActivityIndicator from 'react-native-modal-activityindicator';

import API from '../../utils/api';
export default class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      password_confirm: '',
      OTP: '',
      isLoading: false,
    };
  }
  validated(){
    return (this.state.phone === '' || this.state.password === '' || this.state.password === '' ||
    this.state.password !== this.state.password_confirm) ;
  }
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBar backgroundColor="#003f5c" />
          <ActivityIndicator />
        </SafeAreaView>
        <Text style={styles.logo}>Vagabond</Text>
        <View style={styles.inputView} >
          <TextInput
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
            keyboardType={'phone-pad'}
            maxLength = {11}
            style={styles.inputText}
            placeholder="Your phone number" 
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            value={this.state.password_confirm}
            onChangeText={(password_confirm) => this.setState({ password_confirm })}
            secureTextEntry
            style={styles.inputText}
            placeholder="Password Confirm" 
            placeholderTextColor="#003f5c"
          />
        </View>
        <TouchableOpacity
          disabled={this.validated()}
          style={this.validated()?[styles.loginBtn, {opacity:0.2}]:styles.loginBtn}
          // onPress={this.onLogin.bind(this)}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  }, 
  inputView:{
    width:"80%",
    backgroundColor:"#BFBFBF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    fontSize: 16,
    height:70,
    color:"#003f5c"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
});

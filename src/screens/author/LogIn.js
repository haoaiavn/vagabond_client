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

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      isLoading: false,
    };
  }
  validated(){
    return this.state.phone === '' || this.state.password === '';
  }
  onLogin() {
    const { phone, password } = this.state;
    //login [POST]
    this.setState({isLoading: true});
    API.post('/login', {phone: phone, password: password})
    .then(res =>{
      if(res.data.status ==200){
        this.successLogin({user: res.data.user, jwt: res.data.jwt});
      }
      else if(res.data.status == 401){
        Alert.alert('Login failed', `${res.data.message}`);
      }
    })
    .then(()=>{
      this.setState({isLoading: false});
    })
    .catch(error => console.log(error))
  }

  async successLogin(data){
     try {
      await AsyncStorage.setItem('@token_user', data.jwt);
      RNRestart.Restart();
     } catch (error) {
       console.log(error);
     }
  }

  goToSignUp() {
      this.props.navigation.navigate('SignUp')
  }
  goToResetPassword() {
    this.props.navigation.navigate('ResetPassword')
  }
  render(){
    return (
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
        <TouchableOpacity
          onPress={this.goToResetPassword.bind(this)}
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.validated()}
          style={this.validated()?[styles.loginBtn, {opacity:0.2}]:styles.loginBtn}
          onPress={this.onLogin.bind(this)}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.goToSignUp.bind(this)}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
        <ModalActivityIndicator visible={this.state.isLoading} size='large' color='white' />
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
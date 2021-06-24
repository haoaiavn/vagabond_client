import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';

import API from '../../utils/api';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
    };
  }
  isValid(){
    return this.state.phone === '' || this.state.password === '';
  }
  onLogin() {
    const { phone, password } = this.state;
    console.log('Credentials', `${phone} + ${password}`);
    //login [POST]
    API.post('/login', {phone: phone, password: password})
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }

  render(){  
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBar backgroundColor="#003f5c" />
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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.isValid()}
          style={this.isValid()?[styles.loginBtn, {opacity:0.2}]:styles.loginBtn}
          onPress={this.onLogin.bind(this)}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
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
  }
});
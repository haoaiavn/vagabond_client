import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function ResetPassword() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+84 90 557 35 62')}
      />
    );
  }

  return (
    <>
      <View style={styles.container}> 
        <View style ={styles.inputView}>
            <TextInput style={styles.inputText} value={code} onChangeText={text => setCode(text)} />
        </View>
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </>
  );
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
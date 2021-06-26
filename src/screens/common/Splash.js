import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class SplashScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>
            Vagabond
          </Text>
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
  });
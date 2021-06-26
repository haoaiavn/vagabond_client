import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './routes/RootStack';

export default class App extends React.Component{
  render(){
    return(
      
      <NavigationContainer>
        <View>
          <SafeAreaView>
            <StatusBar backgroundColor="#003f5c" />
          </SafeAreaView>
        </View>
        <RootStack/>
      </NavigationContainer>
    );
  } 
}
import 'react-native-gesture-handler';
import * as React from 'react';
import {Text,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './routes/RootStack';


export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    );
  } 
}
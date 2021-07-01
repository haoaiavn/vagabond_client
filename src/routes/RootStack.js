import * as React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './main/MainStack';
import AuthorStack from './author/AuthorStack';

import SplashScreen from '../screens/common/Splash';

import { isLogined } from '../utils/author';


const Stack = createStackNavigator();

export default class RootStack extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      isLoading: true,
    };
  }
  async componentDidMount(){
    try {
      var flag = await isLogined();
      if (flag) {
        this.setState({isLogined: true, isLoading: false});
      }
      else{
        this.setState({isLogined: false, isLoading: false});
      }
    } catch (error) {
      
    }
  }
  render(){
    if(this.state.isLoading){
      return(
        <SplashScreen/>
      );
    }
    else{
      if (this.state.isLogined) {
        return (
          <MainStack/>
        ); 
      }
      else{
        return (
          <AuthorStack/>
        );
      }
    }
  }
    
    
}
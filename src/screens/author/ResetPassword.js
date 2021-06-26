import React from 'react';
import {Text,View, Button} from 'react-native';
import RNRestart from 'react-native-restart';
import { logOut } from '../../utils/author';
export default class ResetPassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          phone: '',
          password: '',
          isLoading: false,
        };
      }
    async componentDidMount(){
        try {
            var result = await logOut();
            if(result){
                RNRestart.Restart();
            }
        } catch (error) {

        }
    }
    render(){
        return(
            <Text> Reset Password </Text>
        );
    }
} 
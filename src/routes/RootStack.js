import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../screens/author/LogIn';
import SignUp from '../screens/author/SignUp';
import ResetPassword from '../screens/author/ResetPassword';

function isSignedIn(){
    return false;
}

const Stack = createStackNavigator();

export default function RootStack(){
    const flagLogined = isSignedIn();
    return(
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
            {   
                flagLogined ? (
                    <>
                      <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    </>
                  ) : (
                    <>
                      <Stack.Screen name="LogIn" component={LogIn} />
                      <Stack.Screen name="SignUp" component={SignUp} />
                      <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    </>
                  )
            }
        </Stack.Navigator>
    );
}
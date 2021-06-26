import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../../screens/author/LogIn';
import SignUp from '../../screens/author/SignUp';
import ResetPassword from '../../screens/author/ResetPassword';

const Stack = createStackNavigator();

export default function AuthorStack(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    );
}
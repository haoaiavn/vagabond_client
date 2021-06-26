import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Message from '../../screens/main/Message';
import Location from '../../screens/main/Location';
import Diary from '../../screens/main/Diary';

const Tab = createBottomTabNavigator();
export default function MainStack(){
    return(
        <Tab.Navigator
            tabBarOptions={{
            activeTintColor: '#003f5c',
            showLabel: true,
        }}>
            <Tab.Screen 
            options={{
                tabBarLabel: 'Message',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="chatbubbles" color={color} size={size} />
                ),
              }}
            name="Message" component={Message} />
            <Tab.Screen 
            options={{
                tabBarLabel: 'Location',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="locate" color={color} size={size} />
                ),
              }}
            name="Location" component={Location} />
            <Tab.Screen
            options={{
                tabBarLabel: 'Diary',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="book" color={color} size={size} />
                ),
              }} 
            name="Diary" component={Diary} />
        </Tab.Navigator>
    );
}
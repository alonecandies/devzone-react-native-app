import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';
import Register from '../screens/register';
import HomeTab from './homeNavigation';

const Stack = createStackNavigator();

export default function NavigationStack() { 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{headerShown:null}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShown:null}} name="Register" component={Register}/>
                <Stack.Screen options={{headerShown:null}} name="Home" component={HomeTab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
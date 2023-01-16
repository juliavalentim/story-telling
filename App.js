import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from './screen/loginScreen';
import RegisterScreen from './screen/register';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const Stack = createStackNavigator()

const StackNav = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='login' component={LoginScreen}/> 
      <Stack.Screen name='register' component={RegisterScreen}/>
      <Stack.Screen name='dashboard' component={DrawerNavigator}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}
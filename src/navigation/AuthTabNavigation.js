import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SignIn from '../screens/signin/SignIn';
import SignUp from '../screens/signup/SignUp';

import PassManager from '../screens/passmanager/PassManager';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator

const Tab = createMaterialTopTabNavigator();


const AuthTabNavigation = () => {
  return (
    // <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#E1E1D9',
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          tabBarIndicatorStyle: {
            borderBottomColor: '#FFA222',
            borderBottomWidth: 4,
            borderRadius: 3.5,
            marginLeft: 60,
            width: 81,
          },
        })}>
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};
export default AuthTabNavigation;

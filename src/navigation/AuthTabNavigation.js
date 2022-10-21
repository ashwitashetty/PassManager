import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SignIn from '../screens/signin/SignIn';
import SignUp from '../screens/signup/SignUp';

const Tab = createMaterialTopTabNavigator();

const AuthTabNavigation = () => {
  return (
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
          marginLeft: "15%",
          width: "10%",
        },
      })}>
      <Tab.Screen name="Sign In" component={SignIn} />
      <Tab.Screen name="Sign Up" component={SignUp} />
    </Tab.Navigator>
  );
};
export default AuthTabNavigation;

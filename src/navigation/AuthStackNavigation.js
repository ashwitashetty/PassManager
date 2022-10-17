import {View, Text} from 'react-native';
import React from 'react';
import RNBootSplash from "react-native-bootsplash"
import {NavigationContainer} from '@react-navigation/native';

import PassManager from '../screens/passmanager/PassManager';
import MainScreen from '../screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  const theme = {
    colors: {
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={theme} onReady={()=> RNBootSplash.hide()}>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="PassManager" component={PassManager} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigation;

import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import PassManager from './src/screens/passmanager/PassManager';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';
const App = () => {
  return <AuthStackNavigation />;
  // return <Text>Hello</Text>;
};

export default App;

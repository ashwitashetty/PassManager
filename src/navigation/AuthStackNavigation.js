import {Button} from 'react-native';
import React from 'react';

import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PassManager from '../screens/passmanager/PassManager';
import MainScreen from '../screens/mainscreen/MainScreen';
import AddSite from '../screens/addsite/AddSite';
import SiteDetails from '../screens/sitedetails/SiteDetails';
import EditScreen from '../screens/editscreen/EditScreen';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  const theme = {
    colors: {
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PassManager"
          component={PassManager}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
       
          options={{
            headerStyle: {
              backgroundColor: '#0E85FF',
              color: 'white',
            },
            headerTintColor: 'white',
          
          }}
        />
        <Stack.Screen
          name="Add Site"
          component={AddSite}
          options={{
            headerStyle: {
              backgroundColor: '#0E85FF',
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Site Details"
          component={SiteDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigation;

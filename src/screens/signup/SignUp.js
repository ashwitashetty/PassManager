import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Entypo'
import PrimaryButton from '../../component/PrimaryButton';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Mobile Number" style={styles.textInput} />
      <TextInput placeholder="Enter 4 digit MPin" style={styles.textInput} />
      <View style={styles.password}>
        <TextInput placeholder="Re-Enter 4 digit MPin" />
        <Icon name="eye-with-line" size={20} />
      </View>
      <PrimaryButton navigation={navigation}/>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:25,
  },
  textInput: {
    height: 54,
    width: 300,
    borderColor: 'rgba(208,208,208,0.5)',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    margin: 15,
    borderRadius: 4,
    
  },
  eyeIcon: {
    height: 15,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  password: {
    height: 54,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderColor: 'rgba(208,208,208,0.5)',
    fontWeight: '600',
    margin: 15,
    borderRadius: 4,
  },
});

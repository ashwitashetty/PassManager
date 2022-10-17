import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import Button from '../../component/Button';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Mobile Number" style={styles.textInput} />
      <View style={styles.password}>
        <TextInput placeholder="MPin" />
        <Image
          source={require('/Volumes/Development/PassManager/src/assets/eye_on.png')}
          style={styles.eyeIcon}
        />
      </View>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Button navigation={navigation} />
      <Image
        source={require('/Volumes/Development/PassManager/src/assets/fingerprinticon.png')}
        style={styles.fingerPrintIcon}
      />
      <View style={styles.textBottom}>
        <Text style={styles.textBottom1}>OK</Text>
        <Text style={styles.textBottom2}> USE YOUR FINGERPRINT TO LOGIN</Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 54,
    width: 300,
    borderColor: 'rgba(208,208,208,0.5)',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    margin: 30,
    borderRadius: 4,
    fontWeight: '600',
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
    borderRadius: 4,
    borderColor: 'rgba(208,208,208,0.5)',
    fontWeight: '600',
  },
  forgotPassword: {
    height: 17,
    wdth: 143,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 17,
    marginTop: 30,
    marginRight: 145,
  },
  fingerPrintIcon: {
    height: 54,
    width: 52.31,
    marginTop: 150,
  },
  textBottom: {
    flexDirection: 'row',
    // margin:10,
    // paddingHorizontal:10,
  },
  textBottom1: {
    height: 24,
    width: 27,
    color: '#FFFFFF',
    fontSize: 18,

    lineHeight: 24,
    fontWeight: 'bold',
  },
  textBottom2: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    //  letterSpacing:0.12,
    lineHeight: 21,
  },
});

import {StyleSheet, Text, TextInput, View, Image,Pressable} from 'react-native';
import React from 'react';
import PrimaryButton from '../../component/PrimaryButton';

import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';




const SignIn = ({navigation}) => {
  const signinValidationSchema = yup.object().shape({
    mobileno: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required('Phone number is required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be${max} of characters`)
      .required('mPin is required'),
  });
// const handleSignIn = () => {
  //   alert(`Congrats!!! Success \n Signin to access the vault`);
  //   navigation.navigate('PassManager');
  // };
  return (
    <View style={styles.container}>
      <Formik
          validationSchema={signinValidationSchema}
          initialValues={{mobileno: '', mpin: ''}}
          onSubmit={async values => {
            console.log(values);
            try {
              const jsonValue = await AsyncStorage.getItem('values.mobileno');
              if (jsonValue != null) {
                parseValue = JSON.parse(jsonValue);

                if (
                  values.mobileno === parseValue.mobileno &&
                  values.mpin === parseValue.mpin
                ) {
                  alert('Successfully Logged In');
                  navigation.navigate('PassManager');
                } else {
                  Alert('Enter Correct Mobile Number and MPin');
                }
              }
            } catch (err) {
              console.log(err);
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
             errors,
            isValid,
          }) => (
            <>
      <TextInput
                name="mobileno"
                placeholder="Mobile Number"
                placeholderTextColor={'grey'}
                style={styles.textInput}
                onChangeText={handleChange('mobileno')}
                onBlur={handleBlur('mobileno')}
                value={values.mobileno}
                keyboardType="number-pad"
              />
              {errors.mobileno && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.mobileno}
                </Text>
              )}
      <View style={styles.password}>
      <TextInput
                name="mpin"
                placeholder="MPin"
                onChangeText={handleChange('mpin')}
                placeholderTextColor={'grey'}
                onBlur={handleBlur('mpin')}
                value={values.mpin}
                keyboardType="number-pad"
                secureTextEntry
              />
        <Image
          source={require('/Volumes/Development/PassManager/src/assets/images/eye_on.png')}
          style={styles.eyeIcon}
        />
      </View>
      {errors.mpin && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.mpin}</Text>
              )}
              <Pressable style={{}}>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </Pressable>
      <PrimaryButton onPress={handleSubmit}
                  disabled={!isValid} />
      <Image
        source={require('/Volumes/Development/PassManager/src/assets/images/fingerprinticon.png')}
        style={styles.fingerPrintIcon}
      />
      <View style={styles.textBottom}>
        <Text style={styles.textBottom1}>OK</Text>
        <Text style={styles.textBottom2}> USE YOUR FINGERPRINT TO LOGIN</Text>
      </View>
      </>
          )}
        </Formik>
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
    marginTop: 30,
    borderRadius: 4,
    fontWeight: '600',
    marginBottom:5,
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
    marginTop:30,
    marginBottom:5,
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

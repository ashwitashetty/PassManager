import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import PrimaryButton from '../../component/PrimaryButton';

import {Formik, Field} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-simple-toast"

const SignUp = ({navigation}) => {
  const signupValidationSchema = yup.object().shape({
    mobileno: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required('Mobile number is required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be ${max} characters`)
      .required('mPin is required'),
    conformmpin: yup
      .string()
      .oneOf([yup.ref('mpin')], 'mPin do not match')
      .required('Confirm mPin is required'),
  });

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{mobileno: '', mpin: '', conformmpin: ''}}
        onSubmit={async values => {
          console.log(values);
          try {
            const jsonValue = JSON.stringify(values);
            await AsyncStorage.setItem('values.mobileno', jsonValue);
            Toast.show('Congrats!!! Sucess \n Signin to access the vault');
            navigation.navigate('Sign In');
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
              placeholder="   Enter Mobile Number"
              keyboardType="numeric"
              placeholderTextColor="grey"
              onChangeText={handleChange('mobileno')}
              onBlur={handleBlur('mobileno')}
              value={values.mobileno}
              style={styles.textInput}
            />
            {errors.mobileno && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.mobileno}
              </Text>
            )}
            <TextInput
              name="mpin"
              placeholder="   Enter 4 digit Mpin"
              onChangeText={handleChange('mpin')}
              placeholderTextColor={'grey'}
              onBlur={handleBlur('mpin')}
              value={values.mpin}
              secureTextEntry
              keyboardType="numeric"
              style={styles.textInput}
            />
            {errors.mpin && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.mpin}</Text>
            )}

            <View style={styles.password}>
              <TextInput
                name="confirmmpin"
                placeholder="   Re-Enter 4 digit Mpin"
                onChangeText={handleChange('conformmpin')}
                placeholderTextColor={'grey'}
                onBlur={handleBlur('conformmpin')}
                value={values.conformmpin}
                secureTextEntry
                keyboardType="numeric"
              />
              <Icon name="eye-with-line" size={20} />
            </View>
            {errors.conformmpin && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.conformmpin}
              </Text>
            )}

            <PrimaryButton
              navigation={navigation}
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  textInput: {
    height: 54,
    width: 300,
    borderColor: 'rgba(208,208,208,0.5)',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 5,
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
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 4,
  },
});

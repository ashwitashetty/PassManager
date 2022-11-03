import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import CustomButton from '../../component/CustomButton';
import {add} from '../redux/ManagerSlice';
import {Formik} from 'formik';
import * as yup from 'yup';
import DropdownField from '../../component/DropdownField';

const AddSite = ({navigation}) => {
  const src = require('/Volumes/Development/PassManager/src/assets/images/lockApp.png');
  const dispatch = useDispatch();
  const data = useSelector(state => state.password.value);
  
  const [inputValue, setInputValue] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye-with-line');

  const [selected, setSelected] = useState(' ');
  const dropdownData = [
    {key: 'Social Media', value: 'Social Media'},
    {key: 'Shopping Sites', value: 'Shopping Sites'},
 
  ];
  const userId = useSelector(state => state.userId.userId)
  
  const signupValidationSchema = yup.object().shape({
    url: yup.string().required('url is required'),
    sitename: yup.string().required('sitename is required'),
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
    notes: yup.string().required(),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{
          url: '',
          sitename: '',
          folder: '',
          username: '',
          password: '',
          notes: '',
          src: src,
          
        }}
        onSubmit={async values => {
          const obj = {
            id: data.length + 1,
            url: values.url,
            sitename: values.sitename,
            folder: selected,
            username: values.username,
            password: values.password,
            notes: values.notes,
            src: src,
            userId:userId
          };
          dispatch(add(obj));
          console.log(values);
          try {
            Toast.show('Saved Successfully');
            navigation.navigate('PassManager');
          } catch (err) {
            console.log(err);
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values, handleReset}) => (
          <>
            <ScrollView>
              <View>
                <View>
                  <Text style={styles.text}>URL</Text>
                  <TextInput
                    style={styles.rectangle}
                    onChangeText={handleChange('url')}
                    onBlur={handleBlur('url')}
                    value={values.url}
                  />
                </View>
                <View>
                  <Text style={styles.text}>Site Name</Text>
                  <TextInput
                    style={styles.rectangle}
                    onChangeText={handleChange('sitename')}
                    onBlur={handleBlur('sitename')}
                    value={values.sitename}
                  />
                </View>
                <DropdownField
                  text="folder"
                  name="folder"
                  onChangeText={handleChange('folder')}
                  onBlur={handleBlur('folder')}
                  data={dropdownData}
                  value={selected}
                  setSelected={setSelected}
                />

                <View>
                  <Text style={styles.text}>User Name</Text>
                  <TextInput
                    style={styles.rectangle}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                </View>

                <View>
                  <Text style={styles.text}>Site Password</Text>
                  <View style={styles.rectangle}>
                    <TextInput
                      style={styles.inputText}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={secureTextEntry}
                    />
                    <Icon
                      name={icon}
                      size={25}
                      onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                        secureTextEntry
                          ? setIcon('eye-with-line')
                          : setIcon('eye');
                      }}
                    />
                  </View>
                </View>

                <View>
                  <Text style={styles.text}>Notes</Text>
                  <TextInput
                    style={styles.rectangle1}
                    multiline={true}
                    onChangeText={handleChange('notes')}
                    onBlur={handleBlur('notes')}
                    value={values.notes}
                  />
                </View>
              </View>
              <View style={styles.button}>
                <CustomButton title={'Reset'} onPress={handleReset} />
                <CustomButton title={'Save'} onPress={handleSubmit} />
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default AddSite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },

  rectangle: {
    height: 41,
    width: '100%',
    borderColor: '#D7D7D7',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#F5F7fB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    height: 24,
    width: '100%',
    color: '#949CA5',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  rectangle1: {
    height: 61,
    width: '100%',
    borderColor: '#D7D7D7',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#F5F7fB',
  },
  button: {
    flexDirection: 'row',
  },
  inputText: {
    height: 41,
    width: '92.9%',
  },
});

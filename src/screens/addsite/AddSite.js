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

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from '../../component/CustomButton';
import {add} from '../redux/ManagerSlice';
import {Formik} from 'formik';

const AddSite = ({navigation}) => {
  const src = require('/Volumes/Development/PassManager/src/assets/images/facebook.png');
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Formik
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
          dispatch(add(values));
          console.log(values);
          try {
            const jsonValue = JSON.stringify(values);
            await AsyncStorage.setItem(values.url, jsonValue);

            Toast.show('Saved Successfully');
            navigation.navigate('PassManager');
          } catch (err) {
            console.log(err);
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <ScrollView>
              <View style={styles.content}>
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

                <View style={styles.password}>
                  <Text style={styles.text}>Sector/Folder</Text>
                  <View style={styles.rectangle}>
                    <TextInput
                      style={styles.inputText}
                      onChangeText={handleChange('folder')}
                      onBlur={handleBlur('folder')}
                      value={values.folder}
                    />
                    <Icon
                      name="chevron-down"
                      size={20}
                      color="#0E85FF"
                      style={{alignItems: 'flex-end'}}
                    />
                  </View>
                </View>

                <View>
                  <Text style={styles.text}>User Name</Text>
                  <TextInput
                    style={styles.rectangle}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                </View>

                <View style={styles.password}>
                  <Text style={styles.text}>Site Password</Text>
                  <View style={styles.rectangle}>
                    <TextInput
                      style={styles.inputText}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry
                    />
                    <Icon name="eye" size={20} />
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
            </ScrollView>
            <View style={styles.button}>
              <CustomButton title={'Reset'} />
              <CustomButton title={'Save'} onPress={handleSubmit} />
            </View>
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
  },
  content: {
    marginHorizontal: 30,
  },
  rectangle: {
    height: 41,
    width: 321,
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
    width: 200,
    color: '#949CA5',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  rectangle1: {
    height: 61,
    width: 321,
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
    width: 280,
  },
});

import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {edit} from '../redux/ManagerSlice';
import DropdownField from '../../component/DropdownField';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const EditScreen = ({navigation}) => {
  const route = useRoute();

  const dispatch = useDispatch();
  const siteid = route.params.data.id;

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye-with-line');

  const [selected, setSelected] = useState(' ');

  const dropdownData = [
    {key: 'Social Media', value: 'Social Media'},
    {key: 'Shopping Sites', value: 'Shopping Sites'},
   
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          url: route.params.data.url,
          sitename: route.params.data.sitename,
          folder: route.params.data.folder,
          username: route.params.data.username,
          password: route.params.data.password,
          notes: route.params.data.notes,
        }}
        onSubmit={async values => {
          const obj = {
            id: siteid,
            url: values.url,
            sitename: values.sitename,
            folder:selected,
            username: values.username,
            password: values.password,
            notes: values.notes,
          };
          dispatch(edit(obj));
          navigation.navigate('PassManager');
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <ScrollView>
              <View style={styles.container2}>
                <View style={styles.container3}>
                  <Text style={styles.text}>URL</Text>
                  <TextInput
                    style={styles.inputBox}
                    selectTextOnFocus={false}
                    onChangeText={handleChange('url')}
                    onBlur={handleBlur('url')}
                    value={values.url}
                  />
                </View>
                <View style={styles.container3}>
                  <Text style={styles.text}>Site Name</Text>
                  <TextInput
                    style={styles.inputBox}
                    selectTextOnFocus={false}
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
                <View style={styles.container3}>
                  <Text style={styles.text}>User Name</Text>
                  <TextInput
                    style={styles.inputBox}
                    selectTextOnFocus={false}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                </View>
                <View style={styles.container3}>
                  <Text style={styles.text}>Site Password</Text>
                  <View style={styles.inputBox}>
                    <TextInput
                      style={styles.inputText}
                      selectTextOnFocus={false}
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
                <View style={styles.container3}>
                  <Text style={styles.text}>Notes</Text>
                  <TextInput
                    style={styles.noteBox}
                    selectTextOnFocus={false}
                    onChangeText={handleChange('notes')}
                    onBlur={handleBlur('notes')}
                    value={values.notes}
                  />
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.rectangle}
                  onPress={handleSubmit}>
                  <Text style={styles.update}>Update</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    padding: 10,
  },
  container3: {
    padding: 10,
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    heigth: 24,
    width: '100%',
    color: '#949CA5',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,

    marginBottom: 10,
  },
  inputBox: {
    height: 41,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 4,
    backgroundColor: '#F5F7FB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  inputText: {
    height: 41,
    width: '92%',
    lineHeight: 24,
    backgroundColor: '#FSF7FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteBox: {
    height: 81,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 4,
    backgroundColor: '#F5F7FB',
  },
  buttonStyle: {
    height: 55,
    width: 192.5,
    backgroundColor: '#0E85FF',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    textAlign: 'center',
  },
  update: {
    height: 28,
    width: '100%',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    textAlign: 'center',
  },
  rectangle: {
    height: 55,
    width: '100%',
    backgroundColor: '#0E85FF',
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
  },
});
export default EditScreen;

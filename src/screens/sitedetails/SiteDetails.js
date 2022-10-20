import {useRoute} from '@react-navigation/native';
import React,{useState} from 'react';
import { Formik } from 'formik';
import ICON from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';

import {View, Text, SafeAreaView, TextInput, StyleSheet,StatusBar,Pressable,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const SiteDetails = ({navigation}) => {
  const route = useRoute();
  const data=route.params.item;
  const dispatch = useDispatch();

  const [secureTextEntry,setSecureTextEntry]=useState(true);
  const [icon,setIcon]=useState('eye-with-line');

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#0E85FF" />
       <View style={styles.topbar}>
      <ICON
          name="arrowleft"
          size={25}
          color="white"
          onPress={() => {
            navigation.navigate('PassManager');
          }}
        />
        <Text style={styles.sitename}>Site Details</Text>
        <Pressable style={styles.button} onPress={()=>navigation.navigate('Edit',{data})}><Text style={styles.textheader}>Edit</Text></Pressable>
      </View>
         <Formik
        initialValues={{url: '',
        sitename: '',
        folder: '',
        username: '',
        password: '',
        notes: '',}}
        >
        {() => (
          <>
          <ScrollView>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.text}>URL</Text>
          <TextInput
            style={styles.inputBox}
            editable={false}
            selectTextOnFocus={false}
            value={route.params.item.url}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>Site Name</Text>
          <TextInput
            style={styles.inputBox}
            editable={false}
            selectTextOnFocus={false}
            value={route.params.item.sitename}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>Sector/Folder</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              editable={false}
              selectTextOnFocus={false}
                value={route.params.item.folder}
            />

            <Icon name="chevron-down" size={25} color="#0E95FF" />
          </View>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>User Name</Text>
          <TextInput
            style={styles.inputBox}
            editable={false}
            selectTextOnFocus={false}
            value={route.params.item.username}/>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>Site Password</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              editable={false}
              selectTextOnFocus={false}
                value={route.params.item.password}
                secureTextEntry={secureTextEntry}
                />
           <Icon name={icon} size={25} onPress={()=>{
                  setSecureTextEntry(!secureTextEntry);
                  secureTextEntry ? setIcon("eye-with-line"):setIcon("eye")}} />
          </View>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>Notes</Text>
          <TextInput
            style={styles.noteBox}
            editable={false}
            selectTextOnFocus={false}
           
                    value={route.params.item.notes} />
        </View>
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
    alignItems: 'center',
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
    width: 200,
    color: '#949CA5',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    marginBottom: 10,
  },
  inputBox: {
    height: 41,
    width: 321,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 4,
    backgroundColor: '#FSF7FB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  inputText: {
    height: 41,
    width: 280,
    lineHeight: 24,
  },
  noteBox: {
    height: 81,
    width: 321,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 4,
    backgroundColor: '#FSF7FB',
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
  edit:{
    backgroundColor: '#0E85FF',
  },
  editText:{
    fontSize:20,
    color:"#FFFFFF"
  }, 
  sitename:{

    fontSize:20,
    color:"white",
    fontWeight:"bold",
    marginStart:100,
  },
  description: {
    backgroundColor: '#F5F7FB',
    height: 61,
    width: 321,
    borderRadius: 4,
    marginStart: 30,
    borderColor: '#D7D7D7',
    borderWidth: 1,
  },
  headerview:{

    backgroundColor: "#0E85FF",
    flexDirection:"row",
    padding:20
     
  },
  button:{
    marginHorizontal:100,
    
  },
  textheader:{

    fontSize:20,
    color:"white",
  },
  topbar: {
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    height: 60,
    alignItems:"center"
  },
});
export default SiteDetails;

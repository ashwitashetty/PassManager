import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from '../../component/CustomButton';

const AddSite = ({navigation}) => {

  const handleSave=()=>{
    return navigation.navigate('PassManager');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.text}>URL</Text>
          <TextInput style={styles.rectangle}></TextInput>
        </View>
        <View>
          <Text style={styles.text}>Site Name</Text>
          <TextInput style={styles.rectangle}></TextInput>
        </View>

        <View style={styles.password}>
          <Text style={styles.text}>Sector/Folder</Text>
          <View style={styles.rectangle}>
            <TextInput style={styles.inputText}></TextInput>
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
          <TextInput style={styles.rectangle}></TextInput>
        </View>

        <View style={styles.password}>
          <Text style={styles.text}>Site Password</Text>
          <View style={styles.rectangle}>
            <TextInput style={styles.inputText}> </TextInput>
            <Icon name="eye" size={20} />
          </View>
        </View>

        <View>
          <Text style={styles.text}>Notes</Text>
          <TextInput style={styles.rectangle1}></TextInput>
        </View>
      </View>
      <View style={styles.button}>
        <CustomButton title={'Reset'} />
        <CustomButton title={'Save'} onPress={handleSave}/>
      </View>
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

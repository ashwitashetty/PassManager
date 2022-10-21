import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import ListView from '../listview/ListView';
import SearchField from "../../component/SearchField"

import { filter } from '../redux/ManagerSlice';
import { useDispatch } from 'react-redux';

const PassManager = ({navigation}) => {
  const [clicked, setClicked] = useState(false);

  const dispatch=useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#2192FF"
      />
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Image
            source={require('/Volumes/Development/PassManager/src/assets/images/burger_menu.png')}
          />
          <Image
            source={require('/Volumes/Development/PassManager/src/assets/images/PassManager.png')}
            style={styles.content}
          />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setClicked(!clicked)}>
            <Image
              source={require('/Volumes/Development/PassManager/src/assets/images/search.png')}
              style={styles.contentIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('/Volumes/Development/PassManager/src/assets/images/sync_icn.png')}
              style={styles.contentIcon}
            />
          </TouchableOpacity>
          <Image
            source={require('/Volumes/Development/PassManager/src/assets/images/profile.png')}
            style={styles.contentIcon}
          />
        </View>
      </View>

      <View style={styles.heading}>
        {clicked ? (
          <SearchField onChangeText={text => dispatch(filter(text))} />
        ) : (
          <>
            <View>
              <Text style={styles.sites}>Sites</Text>
              <View style={styles.borderBottom} />
            </View>

            <View style={styles.headerMenu}>
              <Text style={styles.socialMedia}>Social Media</Text>
              <View style={styles.oval}>
                <Text style={styles.number}>07</Text>
              </View>
              <Icon name="chevron-down" size={20} color="#0E85FF" />
            </View>
          </>
        )}
      </View>
      <View style={styles.listView}>
        <ListView navigation={navigation} />
      </View>
      <TouchableOpacity
        title="add"
        style={styles.button}
        onPress={() => navigation.navigate('Add Site')}>
        <Image
          source={require('/Volumes/Development/PassManager/src/assets/images/add_btn.png')}
          style={styles.addButton}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 10,
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 25,
  },
  contentIcon: {
    marginLeft: 35,
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  sites: {
    height: 33,
    width: 55,
    color: '#3C4857',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 33,
  },
  socialMedia: {
    height: 27,
    width: 113,
    color: '#3C4857',
    fontSize: 19.2,
    letterSpacing: 0,
    lineHeight: 27,
  },
  number: {
    color: '#FFFFFF',
    height: 22,
    width: 19,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 22,
  },
  oval: {
    height: 25,
    width: 25,
    backgroundColor: '#0E85FF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  listView: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 95,
  },
  addButton: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
  borderBottom: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginLeft: 1,
    marginVertical: -3,
  },
});

export default PassManager;

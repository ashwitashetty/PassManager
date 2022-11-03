import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import ListView from '../listview/ListView';
import SearchField from '../../component/SearchField';
import {DataSyncField} from '../../component/DataSyncField';

import {filter, filterDropDown} from '../redux/ManagerSlice';
import {useDispatch, useSelector} from 'react-redux';
import { changeUserState } from '../redux/userStateSlice';

const PassManager = ({navigation}) => {
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState('All');

  const data = useSelector(state => state.password.value);
  const sitesFolder = ['All', 'Social Media', 'Shopping Sites'];

  const setDropdown = () => {
    setVisible(!visible);
  };

  const handleFolders = folder => {
    setItem(folder);
    dispatch(filterDropDown(folder));
    setVisible(false);
  };
  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownContainer}>
          {sitesFolder.map(folder => (
            <TouchableOpacity
              onPress={() => {
                handleFolders(folder);
              }}
              key={folder}>
              <Text style={styles.dropdownText}>{folder}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  
  const handleLogout = ()=>{
    dispatch(changeUserState())
  }

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
          <DataSyncField />
          <TouchableOpacity onPress={handleLogout}>
          <Image
            source={require('/Volumes/Development/PassManager/src/assets/images/profile.png')}
            style={styles.contentIcon}
          />
          </TouchableOpacity>
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
              <Text style={styles.socialMedia}>{item}</Text>
              <View style={styles.oval}>
                <Text style={styles.number}>0{data.length}</Text>
              </View>
              <TouchableOpacity onPress={setDropdown}>
                <Icon name="chevron-down" size={20} color="#0E85FF" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      <View style={{alignItems: 'flex-end', marginRight: '5%'}}>
        {renderDropdown()}
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
    backgroundColor:"#FAFAFA"
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
      width: 1,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 2,
    padding: 10,
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    color: '#3C4857',
    fontSize: 19.2,
    letterSpacing: 0,
    lineHeight: 27,
  },
  number: {
    color: '#FFFFFF',
    height: 22,
    width: 22,
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
    marginHorizontal: 20,
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
    marginVertical: -1,
  },
  dropdownContainer: {
    marginVertical: 5,
    alignSelf: 'flex-end',
    marginEnd: 5,
    borderRadius: 5,
    borderWidth: 0.28,
    borderColor: '#0E85FF',
    backgroundColor: '#FFFFFF',
  },
  dropdownText: {
    padding: 5,
  },
});

export default PassManager;

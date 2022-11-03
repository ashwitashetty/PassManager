import React,{useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {deleteSite} from '../redux/ManagerSlice';

import Clipboard from '@react-native-clipboard/clipboard';
import {getUserData} from "../redux/ManagerSlice"



const ListView = ({navigation}) => {
  const value = useSelector(state => state.password.value );
  const dispatch = useDispatch();
  

  const handleCopy=(copy)=>{
    Clipboard.setString(copy)

  }
  const userId = useSelector(state => state.userId.userId)
  useEffect(() => {
    dispatch(getUserData(userId));
  }, []);

  return (
    <View>
      <FlatList
        data={value}
        renderItem={({item}) => (
          <View>
            <Pressable
              onLongPress={() => {
                Alert.alert('Confirm', 'Do you want to delete Site', [
                  {
                    text: 'ok',
                    onPress: () => {
                      dispatch(deleteSite({id: item.id}));
                    },
                  },
                  {
                    text: 'cancel',
                  },
                ]);
              }}
              onPress={() => navigation.navigate('Site Details', {item})}>
              <View style={styles.itemContainer}>
                <View>
                  <View style={styles.topItem}>
                    <Image source={item.src} style={styles.image} />


                    <View style={styles.component}>
                      <Text style={styles.siteText}>{item.sitename}</Text>

                      <TouchableOpacity style={styles.copyContent} onPress={()=>handleCopy(item.password)}>
                        <Icon name="content-copy" size={16} color="#0E85FF" />
                        <Text style={styles.copyText}> Copy Password</Text>
                      </TouchableOpacity>
                    </View>

                  </View>

                  <View style={styles.bottomItem}>
                    <Text style={styles.link}>{item.url}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    // height: 115,
    width: "96%",
    marginHorizontal:10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 5,
    margin: 10,
  
  },
  topItem: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:10,
    paddingVertical:5,

  },
  bottomItem: {
    alignItems: 'center',
    justifyContent:"center",
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor: '#FAFAFA',
    width: "100%",
    borderBottomRightRadius:12,
    borderBottomLeftRadius:12,
  },
  component:{
    justifyContent:"flex-end",
    flex:1

  },
  siteText: {
    color: '#0E85FF',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
  copyText: {
    color: '#0E85FF',
    fontSize: 11.34,
    alignSelf: 'flex-end',
    // paddingVertical: 4,
  },
  copyContent: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'flex-end',
 
  },
  link: {
    color: '#3C4857',
    fontSize: 14.4,
    letterSpacing:0.5,

 
  },
});

export default ListView;


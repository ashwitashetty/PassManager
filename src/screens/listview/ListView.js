import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector,useDispatch} from 'react-redux';
import { deleteSite } from '../redux/ManagerSlice';

const ListView = ({navigation}) => {
  const value = useSelector(state => state.password.value);
 const dispatch=useDispatch();

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
            }
          }
              onPress={() => navigation.navigate('Site Details', {item})}>
              <View style={styles.itemContainer}>
                <View>
                  <View style={styles.topItem}>
                    <Image source={item.src} style={styles.image} />
                    <View>
                      <Text style={styles.socialText}>{item.sitename}</Text>
                      <View style={styles.copyContent}>
                        <Icon name="content-copy" size={16} color="#0E85FF" />
                        <Text style={styles.copyText}> Copy Password</Text>
                      </View>
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
    borderRadius: 5,
    height: 115,
    width: 365,
    marginStart: 12,

    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 5,
    margin: 10,
  },
  topItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 65.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomItem: {
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#FAFAFA',
    width: 363,
    marginStart: -10,
  },
  socialText: {
    color: '#0E85FF',
    fontSize: 18,
    fontWeight: 60,
    lineHeight: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
  copyText: {
    color: '#0E85FF',
    fontSize: 11.34,
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
  copyContent: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'flex-end',
    marginEnd: -13,
  },
  link: {
    color: '#3C4857',
    fontSize: 14.4,
    paddingBottom: 10,
  },
});

export default ListView;

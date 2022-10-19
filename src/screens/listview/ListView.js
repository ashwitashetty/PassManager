import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

const ListView = ({navigation}) => {
  const value = useSelector(state => state.password.value);
  return (
    <View>
      <FlatList
        data={value}
        renderItem={({item}) => (
          <Pressable
            style={styles.flatList}
            onPress={() => navigation.navigate('Site Details', {item})}>
            <View style={styles.imageName}>
              <Image source={item.src} style={styles.image} />
              <View style={styles.component}>
                <Text style={styles.componentName}>{item.sitename}</Text>
                <View style={styles.copySection}>
                  <Icon
                    name="content-copy"
                    size={18}
                    color="#0E85FF"
                    style={styles.icon}
                  />
                  <Text style={styles.componentCopy}> Copy Password</Text>
                </View>
              </View>
            </View>
            <View style={styles.viewUri}>
              <Text style={styles.textUri}>{item.url}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  flatList: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 12.6,
  },
  component: {
    paddingHorizontal: 15,
  },
  componentName: {
    height: 24,
    width: 83,
    color: '#0E95FF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  componentCopy: {
    color: '#0E85FF',
    fontSize: 11.34,
    marginTop: 9,
  },
  imageName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  viewUri: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#FAFAFA',
  },
  textUri: {
    letterSpacing: 0.5,
  },
  image: {
    marginLeft: 20,
    marginTop: 10,
  },
  copySection: {
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 6,
  },
});

export default ListView;

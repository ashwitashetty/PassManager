import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

const Data = [
  {
    src: require('/Volumes/Development/PassManager/src/assets/images/facebook.png'),
    uri: 'wwww.facebook.com',
    name: 'Facebook',
  },
  {
    src: require('/Volumes/Development/PassManager/src/assets/images/youTube.png'),
    uri: 'wwww.YouTube.com',
    name: 'YouTube',
  },
  {
    src: require('/Volumes/Development/PassManager/src/assets/images/Twitter.png'),
    uri: 'wwww.Twitter.com',
    name: 'Twitter',
  },
  {
    src: require('/Volumes/Development/PassManager/src/assets/images/Instagram.png'),
    uri: 'wwww.Instagram.com',
    name: 'Instagram',
  },

];

const ListView = ({navigation}) => {
  const handleClick=()=>{
    navigation.navigate("Site Details")
  }
  return (
      <View>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <Pressable style={styles.flatList} onPress={handleClick}>
              <View style={styles.imageName}>
                <Image source={item.src} style={styles.image} />
                <View style={styles.component}>
                  <Text style={styles.componentName}>{item.name}</Text>
                 <View style={styles.copySection}>
                    <Icon name='content-copy' size={18} color="#0E85FF" style={styles.icon}/>
                  <Text style={styles.componentCopy}> Copy Password</Text>
                </View>
                </View>
              </View>
              <View style={styles.viewUri}>
                <Text style={styles.textUri}>{item.uri}</Text>
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
    // padding: 10,
    marginHorizontal:15,
    marginVertical: 10,

    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 12.6,
  },
  component:{
    paddingHorizontal:15,
  },
  componentName: {
    height: 24,
    width: 83,
    color: '#0E95FF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    // marginLeft: 200,
    // marginVertical: 10,
  },
  componentCopy: {
    color: '#0E85FF',
    fontSize: 11.34,
   marginTop:9,
  },
  imageName: {
    flexDirection: 'row',
    justifyContent:"space-between",
    padding:5,
  },
  viewUri: {
    // marginVertical: 10,
    alignItems: 'center',
    justifyContent:"center",
    padding: 15,
    backgroundColor:"#FAFAFA"
   
  },
  textUri: {
    letterSpacing: 0.5,
  },
  image: {
    marginLeft: 20,
    marginTop: 10,
  },
  copySection:{
     flexDirection:"row",
  },
  icon:{
    paddingTop:6,
   
  }
});

export default ListView;

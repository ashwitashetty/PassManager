import React from "react";
import { TextInput,View ,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
const SearchField=()=>{
    return(
        <View style={styles.SectionStyle}>
            <TextInput
            placeholder="Type Keywords to search">
            </TextInput>
            <Icon name="arrowright" size={25} color="#0E85FF" />
        </View>
    )
}
export default SearchField;

const styles=StyleSheet.create({
    
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        // height: 54,
        width: "100%",
        borderRadius: 4,
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
        fontWeight: 'bold',
        // padding:4,
        // marginTop:5
      },
})


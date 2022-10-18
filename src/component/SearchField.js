import React from "react";
import { TextInput,View ,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
const SearchField=()=>{
    return(
        <View style={styles.SectionStyle}>
            <TextInput
            placeholder="Type Keywords to search">
            </TextInput>
            <Icon name="chevron-right" size={25} />
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
        height: 54,
        width: 390,
        borderRadius: 4,
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
        fontWeight: 'bold',
        padding:10,
        marginTop:10
      },
})


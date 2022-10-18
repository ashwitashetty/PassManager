import React from "react";

import { View, Text, SafeAreaView, TextInput,StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Entypo";
import CustomButton from "../../component/CustomButton";

const EditScreen = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text}>URL</Text>
                    <TextInput style={styles.inputBox} ></TextInput>
                </View >
                <View style={styles.container3}>
                    <Text style={styles.text}>Site Name</Text>
                    <TextInput style={styles.inputBox} ></TextInput>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text}>Sector/Folder</Text>
                    <View  style={styles.inputBox }>
                        <TextInput style={styles.inputText} > </TextInput>
                        <Icon name='chevron-down' size={25} color='#0E95FF'/>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text}>User Name</Text>
                    <TextInput style={styles.inputBox} ></TextInput>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text}>Site Password</Text>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.inputText} ></TextInput>
                        <Icon name='eye' size={25} />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text}>Notes</Text>
                    <TextInput style={styles.noteBox}></TextInput>
                </View>
            </View>
            {/* <CustomButton title={"Update"} /> */}
            <View>
                <TouchableOpacity style={styles.rectangle} onPress={()=>navigation.navigate("PassManager")}>
                    <Text style={styles.update}>Update</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    container2:{
        flex:1,
        backgroundColor:'#FFFFFF',
        alignItems:"center",
        // justifyContent:"center",
        padding:10
    },
    container3:{
        padding:10,
    },
    container4:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text:{
        heigth: 24,
        width:200,
        color:'#949CA5',
        fontSize:18,
        letterSpacing:0,
        lineHeight:24,
       
        marginBottom:10,

    },
    inputBox:{
        height:41,
        width:321,
        borderWidth:1,
        borderColor:'#D7D7D7',
        borderRadius:4,
        backgroundColor:'#FSF7FB',
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        // margin:5
    },
    inputText:{
        height:41,
        width:280,
    lineHeight: 24,
    },
    noteBox:{
        height:81,
        width:321,
        borderWidth:1,
        borderColor:'#D7D7D7',
        borderRadius:4,
        backgroundColor:'#FSF7FB',

       
    },
    buttonStyle:{
        height:55,
        width:192.5,
        backgroundColor:"#0E85FF",
        justifyContent:"center",
    },
    textStyle:{
        color:'#FFFFFF',
        fontSize:20,
        fontWeight:'500',
        lineHeight:28,
        textAlign:'center'

    },
    update:{
        height:28,
        width:65,
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"500",
        lineHeight:28,
        textAlign:"center",
    },
    rectangle:{
        height:55,
        width:400,
        backgroundColor:"#0E85FF",
        justifyContent:"center",
        alignItems:"center"
    }

})
export default EditScreen;
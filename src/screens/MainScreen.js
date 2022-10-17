import React from "react";
import { View,Text,Image, SafeAreaView,StyleSheet, ImageBackground,StatusBar} from "react-native";
import TabNavigation from "../navigation/TabNavigation";
import LinearGradient from "react-native-linear-gradient";

const MainScreen=()=>{
    return(
        <LinearGradient colors={["#20BBFF","#0E85FF"]} style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
             <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" />
            <View style={{alignItems:"center"}}>
            
            <Image source={require("/Volumes/Development/PassManager/src/assets/logo1.png")} style={styles.image} ></Image>
            
            </View>
            <View style={{flex:1,marginTop:20}}>
                <TabNavigation/>
            </View>
 
        </SafeAreaView>
    </LinearGradient>
    )
}
export default MainScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    linearGradient:{
        flex:1
    },
    image:{
        alignItems:"center",
        justifyContent: 'center',
        marginTop:10,
    },
})
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress}) => {
  return (
    <View >
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   flexDirection:"row",

  // },
    button: {
        height: 55,
        width: 200,
        backgroundColor: '#0E85FF',
        // borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 1,
      },
      text: {
        color: '#FFFFFF',
        fontWeight: '600',
        lineHeight: 24,
        height: 24,
        width: 75,
        letterSpacing: 1.2,
        fontSize: 18,
      },
})
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>SIGN IN</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 44,
    width: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginRight: 170,
  },
  text: {
    color: '#0E85FF',
    fontWeight: '600',
    lineHeight: 24,
    height: 24,
    width: 75,
    letterSpacing: 1.2,
    fontSize: 18,
  },
});

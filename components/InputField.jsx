import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function InputField({ value, onChangeText, placeholder }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    fontSize: 16,
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}><Text style={styles.text}>FAQ</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.text}>Call us</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.text}>Email us</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

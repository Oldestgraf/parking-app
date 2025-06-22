import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>+1 ***-***-8324</ThemedText>
      <ThemedText style={styles.text}>Account Status: Verified</ThemedText>
      <CustomButton title="Logout" onPress={() => console.log('Logout')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  text: {
    marginBottom: 12,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+1 ***-***-8324</Text>
      <Text style={styles.text}>Account Status: Verified</Text>
      <CustomButton title="Logout" onPress={() => console.log('Logout')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
});

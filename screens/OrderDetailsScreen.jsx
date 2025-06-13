// screens/OrderDetailsScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <Text>Location: Clement St</Text>
      <Text>Date: Jan 6</Text>
      <Text>Time: 9:15–15:30</Text>
      <Text>Amount: $8.75</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

// screens/OrderDetailsScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from '../constants/colors';

const orders = [
  { id: '1', location: 'Clement St', date: 'Jan 6', time: '9:15–15:30', amount: '$8.75' },
  { id: '2', location: 'Haight St', date: 'Jan 5', time: '8:30–12:00', amount: '$7.50' },
  { id: '3', location: 'Fulton St', date: 'Jan 4', time: '10:30–14:45', amount: '$9.25' },
  { id: '4', location: 'Clement St', date: 'Jan 6', time: '9:15–15:30', amount: '$8.75' },
  { id: '5', location: 'Haight St', date: 'Jan 5', time: '8:30–12:00', amount: '$7.50' },
  { id: '6', location: 'Fulton St', date: 'Jan 4', time: '10:30–14:45', amount: '$9.25' },
  { id: '7', location: 'Clement St', date: 'Jan 6', time: '9:15–15:30', amount: '$8.75' },
  { id: '8', location: 'Haight St', date: 'Jan 5', time: '8:30–12:00', amount: '$7.50' },
  { id: '9', location: 'Fulton St', date: 'Jan 4', time: '10:30–14:45', amount: '$9.25' },
  { id: '10', location: 'Clement St', date: 'Jan 6', time: '9:15–15:30', amount: '$8.75' },
  { id: '11', location: 'Haight St', date: 'Jan 5', time: '8:30–12:00', amount: '$7.50' },
  { id: '12', location: 'Fulton St', date: 'Jan 4', time: '10:30–14:45', amount: '$9.25' },
];

export default function OrderDetailsScreen() {
  const route = useRoute();
  const { itemId } = route.params;

  const order = orders.find((o) => o.id === itemId);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <Text>Location: {order.location}</Text>
      <Text>Date: {order.date}</Text>
      <Text>Time: {order.time}</Text>
      <Text>Amount: {order.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

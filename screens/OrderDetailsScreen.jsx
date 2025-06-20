// screens/OrderDetailsScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from '../constants/colors';
import { fetchOrders } from '../api/api';

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

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    fetchOrders()
    .then((data) => {
      const found = data.find((item) => item.id === itemId);
      setOrder(found);
    })
    .finally(() => {
      setLoading(false)
    })
  }, [itemId]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (!order) {
    return (
      <View style={styles.center}>
        <Text>Замовлення не знайдено</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{order.title}</Text>
      <Text>{order.body}</Text>
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

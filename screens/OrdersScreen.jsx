import React, { use, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { COLORS } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
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

export default function OrdersScreen() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders()
    .then((data) => setOrders(data.slice(0, 20)))
    .catch((err) => {
      setError(err.message);
      Alert.alert('Error', err.message);
    })
    .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderDetails', { itemId: item.id })}
          >
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2}>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

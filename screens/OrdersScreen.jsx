import React, { useEffect, useState, useContext } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchOrders } from '../api/api';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

export default function OrdersScreen() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useContext(ThemeContext);
  const colors = COLORS[theme];

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
      <ThemedView style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText style={{ color: 'red' }}>{error}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderDetails', { itemId: item.id })}
          >
            <ThemedView style={[styles.card, { backgroundColor: colors.white }]}> 
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText numberOfLines={2}>{item.body}</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
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
import React, { useEffect, useState, useContext, useMemo } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchOrders } from '../api/api';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

export default function OrderDetailsScreen() {
  const route = useRoute();
  const { itemId } = route.params;

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const { theme } = useContext(ThemeContext);
  const colors = COLORS[theme];

  useEffect(() => {
    fetchOrders()
      .then((data) => {
        const found = data.find((item) => item.id === itemId);
        setOrder(found);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  const titleMemo = useMemo(() => order?.title, [order]);
  const bodyMemo = useMemo(() => order?.body, [order]);

  if (loading) {
    return (
      <ThemedView style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </ThemedView>
    );
  }

  if (!order) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText>Замовлення не знайдено</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText style={[styles.title, { color: colors.text }]}>{titleMemo}</ThemedText>
      <ThemedText style={{ color: colors.text }}>{bodyMemo}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
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

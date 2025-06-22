import React, { useContext, useCallback, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import VehicleCard from '../components/VehicleCard';
import { ThemeContext } from '../context/ThemeContext';
import { ThemedView } from '../components/ThemedView';
import { COLORS } from '../constants/colors';

export default function VehiclesScreen() {
  const { theme } = useContext(ThemeContext);
  const colors = COLORS[theme];

  // useMemo
  const vehicles = useMemo(() => [
    { id: '1', plate: '1B2C3D4', model: '2017 Honda Accord' },
    { id: '2', plate: '5E6F7G8', model: '2019 Toyota Corolla' },
    { id: '3', plate: '9H0I1J2', model: '2020 Mazda CX-5' },
  ], []);

  // useCallback для стабільної функції onEdit
  const handleEdit = useCallback((plate) => {
    console.log('Edit vehicle', plate);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <VehicleCard
        plate={item.plate}
        model={item.model}
        onEdit={() => handleEdit(item.plate)}
      />
    ),
    [handleEdit]
  );

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});



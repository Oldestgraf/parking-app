import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import VehicleCard from '../components/VehicleCard';
import { ThemeContext } from '../context/ThemeContext';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { COLORS } from '../constants/colors';

const vehicles = [
  { id: '1', plate: '1B2C3D4', model: '2017 Honda Accord' },
  { id: '2', plate: '5E6F7G8', model: '2019 Toyota Corolla' },
  { id: '3', plate: '9H0I1J2', model: '2020 Mazda CX-5' },
];

export default function VehiclesScreen() {
  const { theme } = useContext(ThemeContext);
  const colors = COLORS[theme];

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VehicleCard
            plate={item.plate}
            model={item.model}
            onEdit={() => console.log('Edit vehicle', item.plate)}
          />
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
});


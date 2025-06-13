import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

export default function VehicleCard({ plate, model, onEdit }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{plate} - {model}</Text>
      <TouchableOpacity onPress={onEdit}>
        <Text style={styles.edit}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 12,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  text: {
    fontSize: 16,
  },
  edit: {
    color: COLORS.primary,
  },
});

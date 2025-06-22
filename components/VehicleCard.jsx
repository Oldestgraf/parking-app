import React, { useContext, memo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

// Компонент VehicleCard обгорнутий у memo
const VehicleCard = ({ plate, model, onEdit }) => {
  const { theme } = useContext(ThemeContext);
  const colors = COLORS[theme];

  return (
    <View style={[styles.card, { backgroundColor: colors.white, borderColor: colors.lightGray }]}>
      <ThemedText style={styles.text}>
        {plate} - {model}
      </ThemedText>
      <TouchableOpacity onPress={onEdit}>
        <ThemedText style={[styles.edit, { color: colors.primary }]}>Edit</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

// Обгортка в React.memo з кастомним порівнянням пропсів
export default memo(VehicleCard, (prevProps, nextProps) => {
  return (
    prevProps.plate === nextProps.plate &&
    prevProps.model === nextProps.model &&
    prevProps.onEdit === nextProps.onEdit
  );
});

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
  },
});

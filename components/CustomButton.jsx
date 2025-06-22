import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';
import { FontContext } from '../context/FontContext';

export default function CustomButton({ title, onPress }) {
  const { theme } = useContext(ThemeContext);
  const { fontSize } = useContext(FontContext)
  const colors = COLORS[theme];

  const dynamicFontSize = fontSize === 'large' ? 20 : 16;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors.white, fontSize: dynamicFontSize }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
});

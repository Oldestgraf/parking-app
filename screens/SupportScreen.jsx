import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { FontContext } from '../context/FontContext';
import { COLORS } from '../constants/colors';

export default function SupportScreen() {
  const { theme } = useContext(ThemeContext);
  const { fontSize } = useContext(FontContext);
  const colors = COLORS[theme];

  const dynamicFontSize = fontSize === 'large' ? 20 : 16;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={[styles.text, { fontSize: dynamicFontSize, color: colors.white }]}>FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={[styles.text, { fontSize: dynamicFontSize, color: colors.white }]}>Call us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={[styles.text, { fontSize: dynamicFontSize, color: colors.white }]}>Email us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    textAlign: 'center',
  },
});


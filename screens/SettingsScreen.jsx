import React, { useContext } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { FontContext } from '../context/FontContext';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { COLORS } from '../constants/colors';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { fontSize, toggleFontSize } = useContext(FontContext);
  const colors = COLORS[theme];

  return (
    <ThemedView style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText style={[styles.title, { color: colors.text }]}>Settings</ThemedText>

      <View style={[styles.settingRow, { borderBottomColor: colors.lightGray }]}>
        <ThemedText style={[styles.label, { color: colors.text }]}>Change Theme</ThemedText>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      <View style={[styles.settingRow, { borderBottomColor: colors.lightGray }]}>
        <ThemedText style={[styles.label, { color: colors.text }]}>Large Font</ThemedText>
        <Switch value={fontSize === 'large'} onValueChange={toggleFontSize} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  label: {
    // fontSize: 18,
  },
});

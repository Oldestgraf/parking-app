import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

export default function OtherScreen() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const colors = COLORS[theme];

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.white, borderColor: colors.lightGray }]}
        onPress={() => navigation.navigate('Settings')}
      >
        <ThemedText style={styles.text}>Settings</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.white, borderColor: colors.lightGray }]}
        onPress={() => navigation.navigate('Support')}
      >
        <ThemedText style={styles.text}>Support</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
  },
});
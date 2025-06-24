import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';
import { FontProvider } from './context/FontContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <FontProvider>
          <AppNavigator />
        </FontProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

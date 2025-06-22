import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';
import { FontProvider } from './context/FontContext';

export default function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <AppNavigator />
      </FontProvider>
    </ThemeProvider>
  );
}

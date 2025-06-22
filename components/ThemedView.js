import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

export const ThemedView = ({ style, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const colors = COLORS[theme];

  return <View style={[{ backgroundColor: colors.background }, style]} {...props} />;
};
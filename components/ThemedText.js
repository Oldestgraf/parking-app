import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { FontContext } from '../context/FontContext';
import { COLORS } from '../constants/colors';

export const ThemedText = ({ style, children, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const { fontSize } = useContext(FontContext);
  const fontStyles = {
    fontSize: fontSize === 'large' ? 20 : 16,
    color: COLORS[theme].text,
  };

  return (
    <Text style={[fontStyles, style]} {...props}>
      {children}
    </Text>
  );
};
import React, { createContext, useState } from 'react';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('normal');
  const toggleFontSize = () => setFontSize((prev) => (prev === 'normal' ? 'large' : 'normal'));

  return (
    <FontContext.Provider value={{ fontSize, toggleFontSize }}>
      {children}
    </FontContext.Provider>
  );
};
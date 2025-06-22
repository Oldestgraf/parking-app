import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtherScreen from '../screens/OtherScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SupportScreen from '../screens/SupportScreen';

const Stack = createNativeStackNavigator();

export default function OtherStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OtherHome"
        component={OtherScreen}
        options={{ title: 'Other' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings', headerBackTitle: 'Back' }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{ title: 'Support', headerBackTitle: 'Back' }}
      />
    </Stack.Navigator>
  );
}
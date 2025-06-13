import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MapScreen from '../screens/MapScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import VehiclesScreen from '../screens/VehiclesScreen';
import CreditCardsScreen from '../screens/CreditCardsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SupportScreen from '../screens/SupportScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Vehicles" component={VehiclesScreen} />
      <Tab.Screen name="Cards" component={CreditCardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Вкладка як головний екран */}
        <Stack.Screen
          name="Orders"
          component={Tabs}
          options={{ headerShown: false }}
        />
        {/* Деталі замовлення */}
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetailsScreen}
          options={{ title: 'Order Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

import MapScreen from '../screens/MapScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import VehiclesScreen from '../screens/VehiclesScreen';
import CreditCardsScreen from '../screens/CreditCardsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SupportScreen from '../screens/SupportScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Map':
              iconName = focused ? 'map' : 'map-outline';
              break;
            case 'Orders':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'Vehicles':
              iconName = focused ? 'car' : 'car-outline';
              break;
            case 'Cards':
              iconName = focused ? 'card' : 'card-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Support':
              iconName = focused ? 'help-circle' : 'help-circle-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        headerShown: true,
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Vehicles" component={VehiclesScreen} />
      <Tab.Screen name="Cards" component={CreditCardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Orders"
          component={Tabs}
          options={{ 
            headerShown: false, 
            transitionSpec: {
              open: config,
              close: config,
            },}}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetailsScreen}
          options={{ 
            title: 'Order Details',
            gestureEnabled: true,
            headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


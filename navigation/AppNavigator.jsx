import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

import MapScreen from '../screens/MapScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import VehiclesScreen from '../screens/VehiclesScreen';
import CreditCardsScreen from '../screens/CreditCardsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import OtherStackScreen from './OtherStack';

import { enableScreens } from 'react-native-screens';
enableScreens();

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function Tabs() {
  const { theme } = useTheme();
  const colors = COLORS[theme];

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
            case 'Other':
              iconName = focused ? 'menu' : 'menu-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
        },
        headerTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.lightGray,
        },
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Vehicles" component={VehiclesScreen} />
      <Tab.Screen name="Cards" component={CreditCardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Other" component={OtherStackScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { theme } = useTheme();
  const colors = COLORS[theme];

  const navTheme = {
    ...(theme === 'dark' ? DarkTheme : DefaultTheme),
    colors: {
      ...((theme === 'dark' ? DarkTheme : DefaultTheme).colors),
      background: colors.background,
      text: colors.text,
      primary: colors.primary,
      card: colors.background,
      border: colors.lightGray,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Back"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="OrderDetails"
          component={OrderDetailsScreen}
          options={{
            title: 'Order Details',
            gestureEnabled: true,
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              color: colors.text,
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}




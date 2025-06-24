// MapScreen.jsx
import React, { useEffect, useState, useContext, useRef } from 'react';
import { StyleSheet, ActivityIndicator, Alert, Text, View, Dimensions, Animated, PanResponder, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { ThemeContext } from '../context/ThemeContext';
import { FontContext } from '../context/FontContext';
import { COLORS } from '../constants/colors';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import darkMapStyle from '../constants/darkMapStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../components/CustomButton';

const { height } = Dimensions.get('window');
const SNAP_TOP = height * 0.05;
const SNAP_BOTTOM = height * 0.65;

const vehicles = ['Toyota Prius', 'BMW X5'];
const cards = ['**** 1234', '**** 5678'];

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);
  const { fonts } = useContext(FontContext);
  const colors = COLORS?.[theme] || COLORS.light;

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const translateY = useRef(new Animated.Value(height)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dy) > 10,
      onPanResponderMove: (_, gesture) => {
        const newY = Math.min(Math.max(gesture.moveY, SNAP_TOP), height);
        translateY.setValue(newY);
      },
      onPanResponderRelease: (_, gesture) => {
        const shouldOpen = gesture.dy < 0;
        Animated.spring(translateY, {
          toValue: shouldOpen ? SNAP_TOP : height,
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location access is required.');
        setLoading(false);
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      setLoading(false);
    })();
  }, []);

  const handleSelectLocation = async (coordinate) => {
    try {
      const [place] = await Location.reverseGeocodeAsync(coordinate);
      const fullAddress = `${place.street || ''}, ${place.city || ''}`;
      setSelectedAddress(fullAddress);
      Animated.spring(translateY, {
        toValue: SNAP_BOTTOM,
        useNativeDriver: false,
      }).start();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading || !location) {
    return (
      <ThemedView style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <MapView
        key={theme}
        provider="google"
        style={styles.map}
        showsUserLocation
        customMapStyle={theme === 'dark' ? darkMapStyle : []}
        onPress={(e) => handleSelectLocation(e.nativeEvent.coordinate)}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Ви тут"
          description="Поточна геопозиція"
        />
      </MapView>

      <Animated.View 
      style={[
        styles.panel, 
        { 
          transform: [{ translateY }],
          backgroundColor: colors.background,
          }]} {...panResponder.panHandlers}>
        <View style={styles.handleWrapper}>
          <View style={styles.handle} />
        </View>

        <ThemedText style={[styles.label]}>Адреса:</ThemedText>
        <ThemedText style={[styles.value]}>
          {selectedAddress || 'Оберіть парковку на карті'}
        </ThemedText>

        <DropDownPicker
          open={openVehicle}
          value={selectedVehicle}
          items={vehicles.map(v => ({ label: v, value: v }))}
          setOpen={setOpenVehicle}
          setValue={setSelectedVehicle}
          setItems={() => {}}
          placeholder="Оберіть авто"
          containerStyle={{ marginBottom: 16, zIndex: 2000 }}
          style={{ backgroundColor: colors.white, borderColor: colors.lightGray }}
          dropDownContainerStyle={{ backgroundColor: colors.background, borderColor: colors.lightGray }}
          textStyle={{ color: colors.text, fontSize: fonts === 'large' ? 20 : 16, }}
        />

        <DropDownPicker
          open={openCard}
          value={selectedCard}
          items={cards.map(c => ({ label: c, value: c }))}
          setOpen={setOpenCard}
          setValue={setSelectedCard}
          setItems={() => {}}
          placeholder="Оберіть картку"
          containerStyle={{ marginBottom: 16, zIndex: 1000 }}
          style={{ backgroundColor: colors.white, borderColor: colors.lightGray }}
          dropDownContainerStyle={{ backgroundColor: colors.white, borderColor: colors.lightGray }}
          textStyle={{ color: colors.text, fontSize: fonts === 'large' ? 20 : 16, }}
        />

        <CustomButton title="Оплатити" onPress={() => console.log('Оплатити')} />
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel: {
    position: 'absolute',
    left: 0,
    right: 0,
    height,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    zIndex: 100,
  },
  handleWrapper: {
    alignItems: 'center',
    paddingBottom: 12,
  },
  handle: {
    width: 40,
    height: 6,
    backgroundColor: '#ccc',
    borderRadius: 3,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    marginBottom: 16,
  },
});

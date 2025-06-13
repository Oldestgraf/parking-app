import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your phone number</Text>
      <InputField placeholder="Phone number" value="" onChangeText={() => {}} />
      <CustomButton title="Next" onPress={() => console.log('Next pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
});

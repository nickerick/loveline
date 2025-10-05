import { Slot } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

/**
 * Optional layout for all auth screens.
 * Wraps children in a full-screen container.
 */
export default function AuthLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}

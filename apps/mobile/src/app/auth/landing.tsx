import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/constants/Colors';
import { StyledButton } from '@/src/components/core/StyledButton';

export default function AuthLandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>loveline ♡</Text>
      <StyledButton
        title='Login'
        onPress={() => router.push('/auth/login')}
        style={{
          backgroundColor: Colors.custom.accent1,
          borderColor: Colors.white,
          borderWidth: 2,
          width: '80%',
        }}
        textStyle={{ color: '#FFF', fontWeight: '700' }}
      />
      <StyledButton
        title='Sign up'
        onPress={() => router.push('/auth/signup')}
        style={{
          backgroundColor: Colors.white,
          borderColor: Colors.custom.accent1,
          borderWidth: 2,
          width: '80%',
        }}
        textStyle={{ color: Colors.custom.primary, fontWeight: '700' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: Colors.custom.primary,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 12,
    color: Colors.white,
    textAlign: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/constants/Colors';
import { StyledButton } from '@/src/components/core/StyledButton';

export default function AuthLandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>loveline ♡</Text>
      </View>

      <View style={styles.bottom}>
        <StyledButton
          title='Login'
          onPress={() => router.push('/auth/login')}
          style={[
            styles.button,
            {
              backgroundColor: Colors.custom.accent1,
              borderColor: Colors.white,
            },
          ]}
          textStyle={{ color: Colors.white }}
        />
        <StyledButton
          title='Sign up'
          onPress={() => router.push('/auth/signup')}
          style={[
            styles.button,
            {
              backgroundColor: Colors.white,
              borderColor: Colors.custom.accent1,
              marginTop: 8,
            },
          ]}
          textStyle={{ color: Colors.custom.primary }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.custom.primary,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    width: '80%',
  },
});

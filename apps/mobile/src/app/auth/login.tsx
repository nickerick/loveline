import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Colors } from '@/src/constants/Colors';
import { StyledButton } from '@/src/components/core/StyledButton';
import { useAuth } from '@/src/hooks/useAuth';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<
    'username' | 'password' | null
  >(null);

  const handleLogin = async () => {
    setLoading(true);
    const success = await login(username, password);
    setLoading(false);

    if (!success) {
      setError('Invalid username or password');
    } else {
      router.push('/(tabs)');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.bottom}>
        <View style={{ width: '90%', flex: 1 }}>
          <TextInput
            placeholder='Username'
            value={username}
            onChangeText={setUsername}
            onFocus={() => setFocusedInput('username')}
            onBlur={() => setFocusedInput(null)}
            style={[
              styles.input,
              focusedInput === 'username' && {
                borderBottomColor: Colors.custom.accent1,
              },
            ]}
            autoCapitalize='none'
          />
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry
            style={[
              styles.input,
              focusedInput === 'password' && {
                borderBottomColor: Colors.custom.accent1,
              },
              { marginTop: 30 },
            ]}
          />
        </View>

        {error && <Text style={styles.error}>{error}</Text>}

        <View style={{ flex: 2, width: '90%' }}>
          <StyledButton
            title={loading ? 'Logging in...' : 'Login'}
            onPress={handleLogin}
            style={[
              styles.button,
              {
                backgroundColor: Colors.custom.accent1,
                borderColor: Colors.custom.accent1,
              },
            ]}
            textStyle={{ color: Colors.white }}
          />
          <Text style={styles.signupText}>
            New user?{' '}
            <Link href='/auth/signup' style={styles.signupLink}>
              Sign up
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.custom.primary,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginVertical: 8,
  },
  button: {
    borderWidth: 2,
    width: '90%',
  },
  error: {
    color: 'red',
    marginBottom: 8,
    textAlign: 'center',
  },
  signupText: {
    color: Colors.custom.tint,
    fontSize: 12,
  },
  signupLink: {
    color: Colors.custom.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

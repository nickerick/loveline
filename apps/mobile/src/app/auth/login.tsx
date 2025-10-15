import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Link, router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { StyledButton } from '@/src/components/core/StyledButton';
import { Colors } from '@/src/constants/Colors';
import { useAuth } from '@/src/hooks/useAuth';

type LoginFormInputs = {
  username: string;
  password: string;
};

export default function LoginScreen() {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    setError(null);

    const success = await login(data.username, data.password);

    setLoading(false);

    if (!success) {
      setError('Invalid username or password');
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name='username'
          rules={{ required: 'Username is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.username && styles.errorInput]}
              placeholder='Username'
              placeholderTextColor='#999'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              editable={!loading}
            />
          )}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username.message}</Text>
        )}

        <Controller
          control={control}
          name='password'
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.password && styles.errorInput]}
              placeholder='Password'
              placeholderTextColor='#999'
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              editable={!loading}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <StyledButton
        title={loading ? 'Logging in...' : 'Login'}
        onPress={handleSubmit(onSubmit)}
        style={[
          styles.button,
          {
            backgroundColor: Colors.custom.accent1,
            opacity: loading ? 0.6 : 1,
          },
        ]}
        textStyle={{ color: Colors.white }}
        disabled={loading}
      />

      {loading && (
        <ActivityIndicator
          size='small'
          color={Colors.custom.primary}
          style={{ marginTop: 12 }}
        />
      )}

      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Text style={{ color: Colors.black }}>New user? </Text>
        <Link href={'/auth/signup'} style={styles.signUpText}>
          Click here to create account
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: Colors.custom.primary,
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 24,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.custom.tint,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 12,
    fontSize: 16,
    color: Colors.black,
  },
  errorInput: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    fontSize: 12,
  },
  button: {
    width: '80%',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginVertical: 8,
  },
  signUpText: {
    color: Colors.custom.primary,
    textDecorationLine: 'underline',
  },
});

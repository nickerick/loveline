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
import { userService } from '@/src/infrastructure/service';
import { useAuth } from '@/src/hooks/useAuth';

type SignUpFormInputs = {
  username: string;
  password: string;
  verifyPassword: string;
  firstName: string;
  lastName: string;
  email: string;
};

export default function SignUpScreen() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const passwordValue = watch('password');

  const onSubmit = async (data: SignUpFormInputs) => {
    setLoading(true);
    setError(null);

    let success: boolean;

    try {
      await userService.createUser(
        data.username,
        data.email,
        data.firstName,
        data.lastName,
        data.password,
      );
      success = true;
    } catch (err) {
      success = false;
    }

    setLoading(false);

    if (!success) {
      setError('Failed to create account. Please try again.');
    } else {
      router.replace({
        pathname: '/auth/login',
        params: {
          username: data.username,
          password: data.password,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name='firstName'
          rules={{ required: 'First name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.firstName && styles.errorInput]}
              placeholder='First Name'
              placeholderTextColor='#999'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              editable={!loading}
            />
          )}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName.message}</Text>
        )}

        <Controller
          control={control}
          name='lastName'
          rules={{ required: 'Last name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.lastName && styles.errorInput]}
              placeholder='Last Name'
              placeholderTextColor='#999'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              editable={!loading}
            />
          )}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName.message}</Text>
        )}

        <Controller
          control={control}
          name='email'
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.errorInput]}
              placeholder='Email'
              placeholderTextColor='#999'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              editable={!loading}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name='username'
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be between 3 and 20 characters',
            },
            maxLength: {
              value: 20,
              message: 'Username must be between 3 and 20 characters',
            },
          }}
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
          rules={{
            required: 'Password is required',
            minLength: {
              value: 12,
              message: 'Password must be at least 12 characters',
            },
          }}
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

        <Controller
          control={control}
          name='verifyPassword'
          rules={{
            required: 'Please verify your password',
            validate: (value) =>
              value === passwordValue || 'Passwords do not match',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.verifyPassword && styles.errorInput]}
              placeholder='Verify Password'
              placeholderTextColor='#999'
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              editable={!loading}
            />
          )}
        />
        {errors.verifyPassword && (
          <Text style={styles.errorText}>{errors.verifyPassword.message}</Text>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <StyledButton
        title={loading ? 'Signing up...' : 'Sign Up'}
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
        <Text style={{ color: Colors.black }}>Already have an account? </Text>
        <Link href={'/auth/login'} style={styles.signUpText}>
          Login here
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

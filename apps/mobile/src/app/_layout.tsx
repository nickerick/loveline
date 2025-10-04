import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/src/hooks/useColorScheme';
import { Appearance } from 'react-native';
import { AuthProvider } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
import SplashScreen from '../components/navigation/SplashScreen';

export default function RootLayout() {
  // Screw you for wanting to use light mode
  Appearance.setColorScheme('light');

  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppContent />
        <StatusBar style='auto' />
      </ThemeProvider>
    </AuthProvider>
  );
}

const AppContent = () => {
  const {user, loading} = useAuth();

  if (true) {
    return <SplashScreen />;
  }
  
  return (
    <>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </>
  );
};

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import * as SecureStore from 'expo-secure-store';
import {
  login as serverLogin,
  refresh,
} from '../infrastructure/TelepactService';
import { telepactService } from '../infrastructure/service';
import { useRouter } from 'expo-router';

/** Represents the authenticated user */
export type AuthUser = {
  userId: string;
};

interface AuthContextValue {
  initializing: boolean;
  user: AuthUser | null;
  accessToken: string | null;
  login: (userId: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<boolean>;
}

/** Constants */
const client = telepactService.client;
const REFRESH_TOKEN_KEY = 'accessRefreshToken';

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

/**
 * AuthProvider wraps the app and provides auth state + functions.
 *
 * Handles login, token refresh, and exposes loading/user state.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const router = useRouter();

  /**
   * On mount, attempt to load a refresh token from secure storage
   * and refresh the access token automatically.
   */
  useEffect(() => {
    async function refreshAuth() {
      const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
      if (refreshToken) {
        await refreshAccessToken();
      }
      setInitializing(false);
    }

    refreshAuth();
  }, []);

  /**
   * Logs user out of platform
   * Deletes cached access and refresh tokens
   */
  const logout = async () => {
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
    setAccessToken(null);
    setUser(null);
    setInitializing(false);
    router.replace('/auth/landing');
  };

  /**
   * Logs in the user using username and password.
   * Saves refresh token to secure storage and updates authenticated user and access token to state
   * @param username - The user's username
   * @param password - The user's password
   * @returns true if login successful, false otherwise
   */
  const login = async (username: string, password: string) => {
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);

    const response = await client.login(
      {},
      serverLogin.Input.from({ username: username, password: password }),
    );
    const output = response[1].getTaggedValue();

    switch (output.tag) {
      case 'Ok_':
        setAccessToken(output.value.accessToken());
        setUser({ userId: 'bruhme' });
        await SecureStore.setItemAsync(
          REFRESH_TOKEN_KEY,
          output.value.refreshToken(),
        );
        return true;
      case 'InvalidCredentials':
        setAccessToken(null);
        setUser(null);
      case 'NoMatch_':
        return false;
    }
  };

  /**
   * Refreshes the access token using the stored refresh token.
   * Updates authenticated user and access token in auth state
   * @returns true if refresh succeeded, false otherwise
   */
  const refreshAccessToken = async (): Promise<boolean> => {
    const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
    if (!refreshToken) return false;
    // const refreshToken = 'test';
    // console.log('here4');

    const response = await client.refresh(
      {},
      refresh.Input.from({ refreshToken: refreshToken }),
    );
    const output = response[1].getTaggedValue();

    switch (output.tag) {
      case 'Ok_':
        setAccessToken(output.value.accessToken());
        // TODO: Verify actually prevents unneceessary re-renders
        setUser((prev) => {
          const next = { userId: 'bruhme' };
          return prev?.userId === next.userId ? prev : next;
        });
        return true;
      case 'InvalidCredentials':
        setAccessToken(null);
        setUser(null);
      case 'NoMatch_':
        return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        initializing,
        user,
        accessToken,
        login,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

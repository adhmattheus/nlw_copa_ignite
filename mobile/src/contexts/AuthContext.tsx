import React, { createContext, ReactNode, useEffect, useState } from "react";
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSesson from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser'
import { api } from "../services/api";

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, promptaAsync] = Google.useAuthRequest({
    clientId: '1000302332125-h1neok3cq800bd8bad5mkgsperds3q9q.apps.googleusercontent.com',
    redirectUri: AuthSesson.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  });


  async function signIn() {
    try {
      setIsUserLoading(true);
      await promptaAsync();

    } catch (error) {
      console.log(error);
      throw error;

    } finally {
      setIsUserLoading(false);
    }
  }

  async function signInWithGoogle(access_token: string) {
    try {
      setIsUserLoading(true);

      const tokenResponse = await api.post('/users', { access_token });
      api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;

      const userInfoReponse = await api.get('/me');
      setUser(userInfoReponse.data.user);

    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }

  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken)
    }
  }, [response]);


  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
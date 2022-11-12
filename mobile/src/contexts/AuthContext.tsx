import React, { createContext, ReactNode } from "react";
import * as AuthSesson from 'expo-auth-session'

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  console.log(AuthSesson.makeRedirectUri({ useProxy: true }));


  async function signIn() {
    console.log('vamos logar');

  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Mattheus',
        avatarUrl: 'https://github.com/adhmattheus.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}
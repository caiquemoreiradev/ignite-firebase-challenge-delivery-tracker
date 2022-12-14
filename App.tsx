import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style='light' backgroundColor='transparent' />

      <Routes />

    </ThemeProvider>
  );
}




import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux';
import { LogBox, View, Text, StyleSheet, Alert, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme/Theme';
import { store } from './src/redux/store';
import MainApp from './src/main/MainApp';

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <>
      <PaperProvider theme={theme} >
        <Provider store={store}>
          <StatusBar backgroundColor='white' style='dark' />
          <MainApp />
        </Provider>
      </PaperProvider>
    </>

  );
};

const styles = StyleSheet.create({
})
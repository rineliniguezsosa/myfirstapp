/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HomeScreen } from './src/presentation/screens/HomeScreen';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterScreenCopy } from './src/presentation/screens/CounterScreenCopy';


export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <PaperProvider>
        <CounterScreenCopy/>
      </PaperProvider>
    </SafeAreaView>
  );
};

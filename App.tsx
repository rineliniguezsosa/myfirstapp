/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HomeScreen } from './src/presentation/screens/HomeScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <CounterScreen/>
    </SafeAreaView>
  );
};

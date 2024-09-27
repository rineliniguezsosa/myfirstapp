import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/presentation/screens/HomeScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <HomeScreen name="Rinel iniguez"/>
    </SafeAreaView>
  );
};

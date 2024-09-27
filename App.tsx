import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/presentation/screens/HomeScreen';

export const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
  );
};

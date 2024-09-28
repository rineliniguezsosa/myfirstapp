/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HomeScreen } from './src/presentation/screens/HomeScreen';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterScreenCopy } from './src/presentation/screens/CounterScreenCopy';

import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider settings={{
      icon: (props) => <IonIcon { ...props } />,
    }}>
        <SafeAreaView style={{flex:1}}>
          <CounterScreenCopy/>
        </SafeAreaView>
    </PaperProvider>
  );
};

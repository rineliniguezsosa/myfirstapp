import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../../styles/global.styles';
// import { IconAddOutline } from '../../assets';


export const CounterScreenCopy = () => {
    const [counter, setcounter] = useState(0);
  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{counter}</Text>

        <FAB
            onPress={() => setcounter(prevState=> prevState + 1)}
            onLongPress={()=> setcounter(0)}
            style={globalStyles.fab}
            icon="add"
        />
    </View>
  );
};

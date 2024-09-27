import React, { useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { PrimaryButton } from '../../components';

export const CounterScreen = () => {
    const [counter, setcounter] = useState(0);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>

        <PrimaryButton
            label="Incrementar"
            onPress={() => setcounter(prevState=> prevState + 1)}
            onLongPress={()=> setcounter(0)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:80,
        color:'black',
        fontWeight:800,
    },
});

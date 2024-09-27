import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export const CounterScreen = () => {
  return (
    <View style={styles.container}> 
        <Text style={styles.title}>CounterScreen</Text>
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
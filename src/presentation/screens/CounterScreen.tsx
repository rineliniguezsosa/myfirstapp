/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View,Text,StyleSheet,Pressable,Platform } from 'react-native';


export const CounterScreen = () => {
    const [counter, setcounter] = useState(0);

    // const handleIncrement = ()=>{
    //   setcounter(prevState => prevState + 1);
    // };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>

        <Pressable
            style={({pressed})=>[
                styles.button,
                pressed && styles.buttonPressed,
            ]}
            onPress={() => setcounter(prevState=> prevState + 1)}>
            <Text style={{color:Platform.OS === 'android' ? 'white' : '#4746AB'}}>+1</Text>
        </Pressable>
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
    button:{
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
    },
    buttonPressed:{
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
    },
});

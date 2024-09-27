import React, { useState } from 'react';
import { View,Text,StyleSheet,Pressable } from 'react-native';


export const CounterScreen = () => {
    const [counter, setcounter] = useState(0);

    // const handleIncrement = ()=>{
    //   setcounter(prevState => prevState + 1);
    // };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>

        <Pressable style={styles.button} onPress={() => setcounter(prevState=> prevState + 1)}>
            <Text>+1</Text>
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
        backgroundColor:'#5856D6',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
    },
});

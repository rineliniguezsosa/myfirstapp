import React, { useState } from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';


export const CounterScreen = () => {
    const [counter, setcounter] = useState(0);

    const handleIncrement = ()=>{
      setcounter(prevState => prevState + 1);
    };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>

        <Button onPress={handleIncrement} title="+1"/>
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

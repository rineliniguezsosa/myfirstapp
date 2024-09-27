import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

interface HomeProps {
    name?:string
}
export const HomeScreen = ({name}:HomeProps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontSize:45,
        textAlign:'center',
        color:'black',
        padding:20,
    },
});

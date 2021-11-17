import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen= ()=> {
    const [enteredValue, setenteredValue] = useState('');
    const handleInputValue= text =>{
        setenteredValue(text.replace(/[^0-9]/g,''));
    }
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card style={styles.inputContainer}>
                <Text>Elija un número</Text>
                <Input
                    maxLength={2}
                    keyboardType="numeric"
                    autoCapitalization="none"
                    autoCorrect={false}
                    value={enteredValue}
                    onChangeText= {handleInputValue}
                 />
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar"  color= {colors.accent}/>
                    <Button title="Confirmar" color= {colors.primary}/>
                </View>
            </Card>
            <Card>
                    <Text>Empezar el juego</Text>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    screen:{
            flex:1,
            padding:10,
            alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        marginVertical:20,
        alignItems:'center'
        
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
        
    }
})

export default StartGameScreen;

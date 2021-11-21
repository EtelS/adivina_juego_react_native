import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React, {useState} from 'react';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen= ({onStarGame})=> {
    const [enteredValue, setenteredValue] = useState('');
    const [confirmedNumber, setconfirmedNumber] = useState(null)

    const handleInputValue= text =>{
        setenteredValue(text.replace(/[^0-9]/g,''));
    }
    const handleResetInput = () => setenteredValue('');
    const handleConfirmInput = () =>{
        const choseNumber= parseInt(enteredValue)
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;
        
        setconfirmedNumber(enteredValue);
        setenteredValue('');
    }

    const handleStartGame = () =>onStarGame(confirmedNumber)

    const confirmedOuput = confirmedNumber ?(
        <Card style={styles.inputContainer}>
            <Text style= {styles.textNumero}>Numero seleccionado: {confirmedNumber}</Text>
            <Button onPress={handleStartGame} title="EMPEZAR EL JUEGO" color= {colors.primary}/>
        </Card>
    ): null ;

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>

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
                        <Button title="Limpiar"  color= {colors.accent} onPress={handleResetInput}/>
                        <Button title="Confirmar" color= {colors.primary} onPress= {handleConfirmInput}/>
                    </View>
                </Card>
                { confirmedOuput}
                
            </View>
        </TouchableWithoutFeedback>
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
        
    },
    textNumero:{
        fontWeight:'bold',
        padding:5,
    }
})

export default StartGameScreen;

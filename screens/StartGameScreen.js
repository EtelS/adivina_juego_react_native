import {
        Alert,
        Button,
        Dimensions,
        Keyboard,
        StyleSheet,
        Text,
        TouchableWithoutFeedback,
        View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen= ({onStarGame})=> {
    const [enteredValue, setenteredValue] = useState('');
    const [confirmedNumber, setconfirmedNumber] = useState(null)
    const [isPortrait, setisPortrait]= useState(true);

    const onPortrait = () =>{
        const dim= Dimensions.get('screen');
        return dim.height >= dim.width;
    }

    const statePortrait= () => setisPortrait(onPortrait());

    useEffect(() =>{
            Dimensions.addEventListener('change', statePortrait);
            return() =>{
                Dimensions.removeEventListener('change', statePortrait)
            };
    }, [])

    const handleInputValue= text =>{
        setenteredValue(text.replace(/[^0-9]/g,''));
    }
    const handleResetInput = () => {
        setenteredValue('');
        Alert.alert('Limpieza', 'Se limpió el valor!', 
                    [{text:'Continuar'}],
                    )
    
    }
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
                        <View style={styles.button}>

                        <Button title="Limpiar"  color= {colors.accent} onPress={handleResetInput}/>
                        </View>
                        <View style={styles.button}>

                        <Button title="Confirmar" color= {colors.primary} onPress= {handleConfirmInput}/>
                        </View>
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
            // padding:10,
            alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width: '100%',
        marginHorizontal:'30%',
        // minWidth: 300,
        // maxWidth: '80%',
        marginVertical:10,
        alignItems:'center',
        // padding:20,
    },
  
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:10,
    },
    button:{
        flex:1,
        paddingHorizontal:3,
        width: Dimensions.get('screen').width/4,
    },
    textNumero:{
        fontWeight:'bold',
        padding:5,
    },
})

export default StartGameScreen;

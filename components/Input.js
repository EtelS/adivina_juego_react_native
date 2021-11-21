import { StyleSheet, TextInput } from 'react-native'

import React from 'react'

const Input = (props) =>{
    return(
        <TextInput
            style={styles.input}
            {...props}
        />
    )

};
const styles = StyleSheet.create({
    input:{
        height:50,
        width:50,
        borderBottomColor:'#000',
        borderBottomWidth:1,
        
    }
})


export default Input;
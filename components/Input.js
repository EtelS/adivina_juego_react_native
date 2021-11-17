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
        
    }
})


export default Input;
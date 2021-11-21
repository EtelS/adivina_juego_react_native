import { StyleSheet, View } from 'react-native'

import React from 'react';

const Card = props =>{
    return(
        <View style={{...styles.container, ...props.style}}>
          {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        backgroundColor:'#fff',
        borderRadius: 10
    },
});

export default Card;
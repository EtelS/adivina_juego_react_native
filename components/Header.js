import { Platform, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import colors from '../constants/colors';

const Header =({title})=>{
    return(
        <View style= {styles.header}>
            <Text style= {styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS === 'android' ? colors.primary : 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color: 'black',
        fontSize:22,
        fontFamily:'Montagu'
    }
})
export default Header;
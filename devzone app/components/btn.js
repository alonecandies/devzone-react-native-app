import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Btn({name,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={['#B7E9F7', '#92DFF3','#7AD7F0']}
                style={styles.buttonContainer}
                >
                <Text style={styles.buttonText}>{name}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        elevation: 8,
        borderRadius: 7,
        marginLeft:30,
        marginRight:30,
        paddingVertical:4,
        width:110,
        marginBottom:5
    },
    buttonText:{
        fontSize: 16,
        color: "#000",
        fontWeight:"bold",
        fontFamily:"monospace",
        alignSelf: "center",
    }
})
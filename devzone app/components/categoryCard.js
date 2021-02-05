import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity:0.8};

export default function categoryCard({data,onPress}){
    if (data){
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../assets/"+data.categorySource)}></Image>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryText}>{data.categoryTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    else return (
        <View></View>
    )
}

const styles=StyleSheet.create({
    card:{
        flex:1,
        elevation:1,
        borderBottomWidth:2,
        borderColor:"gray",
        justifyContent:"center",
        alignItems:"stretch",
        marginTop:5,
    },
    imageContainer:{
        
    },
    image:{
        height:120,
        width:"100%"
    },
    categoryContainer:{
        alignSelf:"center"
    },
    categoryText:{
        fontStyle:"italic",
        fontFamily:"monospace",
        fontWeight:"500"
    }
})

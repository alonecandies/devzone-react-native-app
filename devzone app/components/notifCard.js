import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default function notifCard(props){
    const {data}=props;
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/logokien-signup.8641c4b2.png")}></Image>
            </View>
            <View>
                <Text style={styles.authorText}>{data.author}</Text>
                <Text style={styles.informText}>has recently update his post:{'\n'}"{data.title}"</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        flex:1,
        padding:10,
        elevation:1,
        borderBottomWidth:2,
        borderColor:"gray",
        flexDirection:"row",
        justifyContent:"flex-start",
        paddingBottom:15
    },
    imageContainer:{
        borderRightWidth:1,
        borderRightColor:"#000",
        paddingRight:10,
        marginRight:10,
        paddingTop:5
    },
    image:{
        height:50,
        width:50,
        borderRadius:50
    },
    authorText:{
        fontWeight:"bold"
    },
    imformText:{
        fontWeight:"normal"
    }
})

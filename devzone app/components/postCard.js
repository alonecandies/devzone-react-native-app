import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity:0.8};

export default function postCard({data,onPress}){
    if (data)
        {   
            var createdDate = "";
            for (let i =0;i<10;i++){
                createdDate += data.created_at[i];
            }
            return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <View style={styles.info}>
                        <Text style={styles.author}>{data.authorName}</Text>
                        <Text style={styles.date}>{createdDate}</Text>
                        <Text style={styles.view}>{data.view_count}</Text>
                        <Text style={styles.tag}>{data.tags[0]}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )}
    else return (
        <View></View>
    )
}

const styles=StyleSheet.create({
    card:{
        flex:1,
        elevation:2,
        padding:10,
        borderRadius:4,
        backgroundColor:"white",
        shadowColor:"black",
        shadowOpacity:0.3,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginTop:10
    },
    title:{
        flex:1,
        fontSize:18,
        fontWeight:"400",
        display:"flex",
        justifyContent:"center",
    },
    description:{
        flex:1,
        fontSize:15,
        color:"gray",
        marginTop:5,
        marginBottom:5
    },
    info:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    author:{
        color:"#E77F67",
        marginRight:7
    },
    date:{
        color:"#E77F67",
        marginRight:7
    },
    view:{
        color:"#E77F67",
        marginRight:7
    },
    tag:{
        color:"#E77F67"
    }
})

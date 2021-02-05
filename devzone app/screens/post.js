import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import HTML from 'react-native-render-html'

export default class post extends Component {
    constructor(props){
        super(props);
        var postData = this.props.route.params.postData;
        this.state={
            data:postData
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>{this.state.data.title}</Text>
                    </View>
                    <View style={styles.contentBox}>
                        <HTML source={{html:this.state.data.content}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    titleBox:{
        height:60,
        backgroundColor:"#1E90FF",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        paddingLeft:15,
        paddingRight:15
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
        color:"#2f2f2f"
    },
    contentBox:{
        paddingLeft:10,
        paddingRight:10
    }
})
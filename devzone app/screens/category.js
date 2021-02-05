import React from 'react';
import {View,FlatList,ActivityIndicator,StyleSheet,Text} from 'react-native';
import PostCard from '../components/postCard';

const axios = require('axios');

export default class posts extends React.Component {
    constructor(props){
        super(props);
        var categoryName=this.props.route.params.categoryName;
        this.state={
            data:[],
            isLoading:true,
            categoryName:categoryName
        }
    }
    componentDidMount(){
        let data=this.state.data;
        axios.get(`https://devzone.vn/backend/tutorials?tag=${this.state.categoryName}`).then(response=>{
            for (let i = 0;i<response.data.length;i++){
                data.push(response.data[i]);
            }
        }).then(()=>{
            this.setState({
                isLoading:false,
                data:data
            })
        })
    }
    render() {
        if(this.state.isLoading){
            return (
                <View>
                    <ActivityIndicator size="large" animating></ActivityIndicator>
                </View>
            )
        }
        else {
            return (
            <View style={{flex:1}}>
                <FlatList data={this.state.data}
                    renderItem={({item})=><PostCard data={item} onPress={()=>this.props.navigation.navigate("Post",{
                        postData:item
                    })}/>}
                    keyExtractor={item=>`${item.id}`}
                    contentContainerStyle={{paddingLeft:10,paddingRight:10}}
                >
                </FlatList>
            </View>
        )}
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    buttonView: {
      flexDirection: 'row',
    },
    headerStyle: {
      flex: 1,
      height: 40,
      width: '100%',
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle: {
      color: 'white',
    },
  });

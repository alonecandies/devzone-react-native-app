import React from 'react';
import {View,FlatList,ActivityIndicator,StyleSheet,Text} from 'react-native';
import PostCard from '../components/postCard';
import Btn from '../components/btn';

const axios = require('axios');

export default class posts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            isLoading:true,
            pageCount:1
        }
    }
    componentDidMount(){
        let data=this.state.data;
        axios.get(`https://devzone.vn/backend/tutorials?page=${this.state.pageCount}`).then(response=>{
            for (let i = 0;i<response.data.length;i++){
                data.push(response.data[i]);
            }
        }).then(()=>{
            let newPageCount = this.state.pageCount;
            newPageCount++;
            this.setState({
                isLoading:false,
                data:data,
                pageCount:newPageCount
            })
        })
    }
    footer =()=>{
        return (
            <Btn name="View more" onPress={this.viewMorePostAPI}/>
        )
    }
    viewMorePostAPI= ()=>{
        this.componentDidMount();
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
                    ListFooterComponent={this.footer}
                    ListFooterComponentStyle={{alignSelf:'center'}}
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

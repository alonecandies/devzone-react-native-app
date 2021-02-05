import React from 'react';
import {FlatList} from 'react-native';
import NotifCard from '../components/notifCard';

export default class notification extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id:0,
                    title:"Bài 2.0 Hướng dẫn lập trình Timer trong 8051",
                    description:"timer trong 8051",
                    author:"nguyễn chuyên",
                    date:"2020-08-24",
                    view:"275",
                    tag:"8051"
                },
                {
                    id:1,
                    title:"test1",
                    description:"test1",
                    author:"test1",
                    date:"test1",
                    view:"test1",
                    tag:"test1"
                },
                {
                    id:2,
                    title:"test2",
                    description:"test2",
                    author:"test2",
                    date:"test2",
                    view:"test2",
                    tag:"test2"
                },
                {
                    id:3,
                    title:"test3",
                    description:"test3",
                    author:"test3",
                    date:"test3",
                    view:"test3",
                    tag:"test3"
                },
                {
                    id:4,
                    title:"test4",
                    description:"test4",
                    author:"test4",
                    date:"test4",
                    view:"test4",
                    tag:"test4"
                },
                {
                    id:5,
                    title:"test5",
                    description:"test5",
                    author:"test5",
                    date:"test5",
                    view:"test5",
                    tag:"test5"
                }
            ]
        }
    }
    render() {
        const {data} = this.state;
        return (
            <FlatList data={data}
                renderItem={({item})=><NotifCard data={item}/>}
                keyExtractor={item=>`${item.id}`}
                contentContainerStyle={{paddingLeft:10,paddingRight:10}}
            >
            </FlatList>
        )
    }
}

import React from 'react';
import {FlatList} from 'react-native';
import CategoryCard from '../components/categoryCard';

export default class categories extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    categorySource:"8051.jpg",
                    categoryTitle:"8051",
                    categoryName:"8051"
                },
                {
                    categorySource:"altium.jpg",
                    categoryTitle:"Altium",
                    categoryName:"altium"
                },
                {
                    categorySource:"arduino.png",
                    categoryTitle:"Arduino",
                    categoryName:"arduino"
                },
                {
                    categorySource:"c-basic.png",
                    categoryTitle:"C-Basic",
                    categoryName:"c-basic"
                },
                {
                    categorySource:"proteus.jpg",
                    categoryTitle:"Proteus",
                    categoryName:"proteus"
                },
                {
                    categorySource:"stm32.jpg",
                    categoryTitle:"STM32",
                    categoryName:"stm32"
                }
            ]
        }
    }
    render() {
        const {data} = this.state;
        return (
            <FlatList data={data}
                renderItem={({item})=><CategoryCard data={item} onPress={()=>this.props.navigation.navigate("Category",{
                    categoryName:item.categoryName
                })}/>}
                keyExtractor={item=>`${item.id}`}
                contentContainerStyle={{paddingLeft:5,paddingRight:5}}
            >
            </FlatList>
        )
    }
}

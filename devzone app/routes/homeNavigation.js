import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Posts from '../screens/posts';
import Bookmark from '../screens/bookmark';
import Notification from '../screens/notification';
import Categories from '../screens/categories';
import Information from '../screens/info';
import Category from '../screens/category';
import Post from '../screens/post';

const Tab = createBottomTabNavigator();
const postStack = createStackNavigator();
const bookmarkStack = createStackNavigator();
const notificationStack = createStackNavigator();
const categoryStack = createStackNavigator();

function postStackScreen() {
    return (
        <postStack.Navigator>
            <postStack.Screen name="Posts" component={Posts}/>
            <postStack.Screen name="Post" component={Post}/>
        </postStack.Navigator>
    )
}

function bookmarkStackScreen() {
    return (
        <bookmarkStack.Navigator>
            <postStack.Screen name="Bookmark" component={Bookmark}/>
            <postStack.Screen name="Posts" component={Category}/>
        </bookmarkStack.Navigator>
    )
}

function notificationStackScreen() {
    return (
        <notificationStack.Navigator>
            <postStack.Screen name="Notification" component={Notification}/>
            <postStack.Screen name="Post" component={Post}/>
        </notificationStack.Navigator>
    )
}

function categoryStackScreen() {
    return (
        <categoryStack.Navigator>
            <categoryStack.Screen name="Categories" component={Categories}/>
            <categoryStack.Screen name="Category" component={Category}/>
            <categoryStack.Screen name="Post" component={Post}/>
        </categoryStack.Navigator>
    )
}

export default function HomeTab() {
    return (
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon:({color,size}) => {
                        let iconName;
                        if (route.name==="Post") {
                            iconName='ios-home'
                        }
                        else if (route.name ==='Bookmark'){
                            iconName ='ios-bookmarks';
                        }
                        else if (route.name ==='Notification'){
                            iconName ='ios-notifications';
                        }
                        else if (route.name ==='Category'){
                            iconName = "ios-menu"
                        }
                        else if (route.name ==='Information'){
                            iconName ='ios-information-circle';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor:'black',
                    inactiveTintColor:'gray'
                }}
            >
                <Tab.Screen name="Post" component={postStackScreen}/>
                <Tab.Screen name="Bookmark" component={bookmarkStackScreen}/>
                <Tab.Screen name="Notification" component={notificationStackScreen}/>
                <Tab.Screen name="Category" component={categoryStackScreen}/>
                <Tab.Screen name="Information" component={Information}/>
            </Tab.Navigator>
    )
}
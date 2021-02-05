import React from 'react';
import {StatusBar,SafeAreaView} from 'react-native'
import Login from './screens/login';
import Register from './screens/register';
import Stack from './routes/nestedNavigator';
import Post from './screens/posts';
import Notification from './screens/notification.js';
import Category from './screens/categories';
import Information from './screens/info'
import Tab from './routes/homeNavigation'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar></StatusBar>
      <Stack/>
    </SafeAreaView>
  );
}

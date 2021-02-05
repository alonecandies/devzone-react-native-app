import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Btn from "../components/btn.js";

const axios = require('axios');

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {username:"",password:"",message:""};
  }
  loginAPI=()=>{
    const url="https://devzone.vn/backend/user/login";
    const body =  {
      username:this.state.username,
      password:this.state.password
    }
    axios.post(url,body)
    .then(response=>{
      const setAT = async() => {
        try {
          await AsyncStorage.setItem('x-access-token',response.data["access-token"]);
        } catch(e) {
          console.log(e);
        }
      }
      const getAT = async()=>{
        try { 
          return await AsyncStorage.getItem("x-access-token");
        } catch(e){
          console.log(e);
        }
      }
      setAT();
      this.props.navigation.navigate("Home",{name:'Post'});
      this.props.navigation.reset({
        index:0,
        routes:[{name:'Home'}]
      })
    })
    .catch(error => {this.setState({message:error.response.data.message})});
  }
    render(){
      return (
        <View style={styles.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={['#43D4FF', '#38ABFD', '#2974FA','transparent']}
            style={styles.linearGradientBg}
          />
          <View style={styles.header}>
            <Image style={styles.logo} source={require("../assets/logokien-signup.8641c4b2.png")}/>
            <Text style={styles.title}>Devzone</Text>
          </View>
          <View style={styles.userInput}>
            <View style={styles.inputBox}>
              <View style={styles.inputIcon}><Ionicons name="user-circle-o" size={18}></Ionicons></View>
              <TextInput style={styles.input} onChangeText={(username) => this.setState({username:username})} placeholder="Username"/>
            </View>
            <View style={styles.inputBox}>
              <View style={styles.inputIcon}><Ionicons name="lock" size={27}></Ionicons></View>
              <TextInput secureTextEntry={true} style={styles.input} onChangeText={(password) => this.setState({password:password})} placeholder="Password"/>
            </View>
          </View>
          <View style={styles.buttonSubmit}>
            <Btn name="Login" onPress={this.loginAPI}/>
            <Btn name="Register" onPress={()=>this.props.navigation.navigate('Register')}/>
            <Text style={styles.message}>{this.state.message}</Text>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  linearGradientBg:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500
  },
  container: {
    flex: 1
  },
  header:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:40
  },
  logo:{
    width:50,
    height:50,
    borderRadius:50
  },
  title:{
    marginLeft:5,
    fontSize:45,
    fontWeight:"bold",
    height:50,
    marginBottom:17
  },
  userInput:{
    flex:1,
    paddingLeft:70,
    paddingRight:70,
    bottom:10,
    paddingTop:20
  },
  inputBox:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginTop:5
  },
  inputIcon:{
    paddingRight:10,
    paddingLeft:10
  },
  input:{
    backgroundColor:"white",
    height:27,
    borderRadius:25,
    textAlign:"center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 5,
    width:"100%"
  },
  buttonSubmit:{
    flex:1,
    bottom:20,
    alignItems:"center"
  },
  message:{
      fontSize:20,
      fontWeight:"bold",
      color:"#dc3545"
  }
});

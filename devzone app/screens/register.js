import React,{Component} from 'react';
import { StyleSheet, Text, View, Image,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Btn from "../components/btn.js"

const axios = require('axios');

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      mail:"",
      name:"",
      password:"",
      message:""
    }
  }
    registerAPI=()=>{
      const url="https://devzone.vn/backend/user/signup";
      const body =  {
        username:this.state.username,
        password:this.state.password,
        mail:this.state.mail,
        name:this.state.name
      };
      axios.post(url,body)
      .then(response=>{this.props.navigation.navigate("Login")})
      .catch(error=>{this.setState({message:error.response.data.message})});
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
            <Text style={styles.inputText}>Email:</Text>
            <TextInput style={styles.input} onChangeText={(mail) => this.setState({mail:mail})} placeholder="Insert Email"/>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Username:</Text>
            <TextInput style={styles.input} onChangeText={(username) => this.setState({username:username})} placeholder="Insert Username"/>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Name:</Text>
            <TextInput style={styles.input} onChangeText={(name) => this.setState({name:name})} placeholder="Insert Name"/>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Password:</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(password) => this.setState({password:password})} placeholder="Insert Password"/>
          </View>
        </View>
        <View style={styles.buttonSubmit}>
          <Btn name="Register" onPress={this.registerAPI}/>
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
    justifyContent:"space-between",
    alignItems:"flex-start",
    alignItems:"center",
    marginTop:5
  },
  inputText:{
    flex:1,
    fontSize:17,
    fontWeight:"bold",
    height:30,
    paddingTop:3
  },
  input:{
    flex:1,
    backgroundColor:"white",
    height:27,
    borderRadius:25,
    textAlign:"center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 5
  },
  buttonSubmit:{
    flex:1,
    alignItems:"center",
    paddingTop:70
  },
  message:{
      fontSize:20,
      fontWeight:"bold",
      color:"#dc3545"
  }
});

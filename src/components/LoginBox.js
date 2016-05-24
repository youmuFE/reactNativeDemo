import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native'

import Home from '../routes/Home'

class LoginBox extends Component {

    constructor(props) {
      super(props);
    }

    login(){
      
      this.props.navigator.replace({
        component: Home,
        // params: {
        //   name: this.state.name,
        //   age: this.state.age,
        //   changeMyAge: (age) => {
        //     this.setState({ age })
        //   }
        // }
      })
    }

    registry(){
      
    }

    forgetPass(){

    }

   render() {
      return (
     		<View style={styles.loginBox}>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {console.log('1')}}
              value=""
              placeholder="手机号"
            />
          </View>
          
          <View style={[styles.inputBox,{marginTop:-1}]}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {console.log('1')}}
              placeholder="密码"
              password={true}
            />
          </View>

          <TouchableOpacity 
              onPress={this.login.bind(this)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={styles.text}>登陆</Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <TouchableOpacity
                onPress={this.registry.bind(this)} 
                activeOpacity={0.8}
                style={styles.link}>
              <Text style={styles.text}>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.forgetPass.bind(this)} 
                activeOpacity={0.8}
                style={styles.link}>
              <Text style={styles.text}>忘记密码</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      )
   }
}

var styles = StyleSheet.create({
    loginBox : {
      padding:25,
      paddingTop:50

    },
    inputBox : {
      height: 40,
      borderWidth: 1,
      borderColor: '#AAA',
      
    },
    input : {
      flex:1,
      backgroundColor: '#FFF',
      fontSize: 14,
    },
    button : {
      borderWidth: 1,
      borderColor: '#AAA',
      borderRadius: 5,
      backgroundColor : '#FFF',
      height: 40,
      marginTop: 10,
      marginBottom : 10,
      justifyContent: 'center',
      alignItems:'center',
    },
    bottom : {
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop : 20,
    },
    link: {
      
    },
})

export default LoginBox
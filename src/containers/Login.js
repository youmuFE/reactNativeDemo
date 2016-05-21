import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'


import Header from '../components/Header'
import LoginBox from '../components/LoginBox'
import Main from '../components/Main'

class Login extends Component {
   render() {
        alert('1')
      return (
	      <View style={styles.container}>
	        <Header title="登陆-五粮春销售服务端"/>
	        <Main>
            <LoginBox navigator={this.props.navigator}/>
          </Main>
	      </View>
	    );
	}
}

var styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    flex: 1,
    backgroundColor: '#F5FCFF',
    backgroundColor: 'red',
  },
});

export default Login
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

class Login extends Component {
    constructor(props) {
        super(props);
    }

   render() {
      return (
	      <View style={styles.container}>
	        <Header title="登陆-五粮春销售服务端"/>
	        <View style={styles.main}>
            <LoginBox navigator={this.props.navigator}/>
          </View>
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
  main : {
    flex : 1,
    backgroundColor: '#F0F0F2'
  }
});

export default Login
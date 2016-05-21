import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Login from './Login.js'


class AppComponent extends Component {
   render() {
        
      return (
	      <View style={styles.container}>
	        <Header />
	        <Main />
	        <Footer />
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
  },
});

export default AppComponent
import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Header from '../components/Header'
import Main from '../components/Main'
import Content from '../components/Content'
import Footer from '../components/Footer'


class Home extends Component {
   render() {
        
      return (
	      <View style={styles.container}>
	        <Header title="消息"/>
	        <Main>
            <Content />
          </Main>
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

export default Home
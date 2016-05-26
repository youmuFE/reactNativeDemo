import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


import Header from '../components/Header'
import ArrowButton from './ArrowButton'
import Avatar from './Avatar'

class Me extends Component {

    changeTab(tabIndex){
      var routes = this.props.navigator.getCurrentRoutes(); 
      this.props.navigator.jumpTo(routes[tabIndex])
    }
   
   render() {
      return (
        <View style={styles.container}>
          
          <View style={styles.wrap}>
            <Avatar uri="http://i.imgur.com/UePbdph.jpg"
              name="孙雪"/>
            <View style={styles.center}>
              <ArrowButton uri="http://i.imgur.com/UePbdph.jpg"
                text="我的同事"/>
              <ArrowButton uri="http://i.imgur.com/UePbdph.jpg"
                text="我的群组"/>
            </View>
            <View style={styles.bottom}>
              <ArrowButton uri="http://i.imgur.com/UePbdph.jpg"
                text="设置"/>
            </View>
          </View>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    container: {      
      // flex: 1,
      backgroundColor: '#F5FCFF',
    },
    wrap : {
      // flex : 1,
      backgroundColor : '#F0F0F2',
    },
    top : {
      borderTopWidth : 1,
      borderColor : '#E3E3E3',
    },
    center : {
      borderTopWidth : 1,
      borderColor : '#E3E3E3',
      marginVertical : 20
    },
    bottom : {
      borderTopWidth : 1,
      borderColor : '#E3E3E3',
    },
})

export default Me
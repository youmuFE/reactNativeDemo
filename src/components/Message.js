import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Message extends Component {
    
    changeTab(tabIndex){
      var routes = this.props.navigator.getCurrentRoutes(); 
      this.props.navigator.jumpTo(routes[tabIndex])
    }

   render() {
      return (
     		<View style={styles.container}>
          <View style={styles.wrap}>
            <Text style={styles.word}>Message Page</Text>
          </View>
        </View>
      )
   }

}

var styles = StyleSheet.create({
    word : {
      fontSize:30,
      color:'red'
    },
    container: {      
      flex: 1,
      
      // backgroundColor: '#F9F'
    },
    wrap : {
      flex : 1,
      // backgroundColor : '#F0F0F2',
    },
})

export default Message
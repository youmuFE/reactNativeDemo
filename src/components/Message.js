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
            <Text>Message</Text>
          </View>
        </View>
      )
   }

}

var styles = StyleSheet.create({
    container: {      
      flex: 1,
      borderWidth: 10,
      borderColor: 'blue'
    },
    wrap : {
      flex : 1,
      backgroundColor : '#F0F0F2',
    },
})

export default Message
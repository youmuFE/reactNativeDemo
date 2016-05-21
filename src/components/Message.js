import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'


class Message extends Component {
   render() {
      return (
     		<View style={styles.main}>
          <Text>Message</Text>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    main : {
      flex : 1,
      backgroundColor: '#F0F0F2'
    }
})

export default Message
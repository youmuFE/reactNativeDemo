import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


class Waiting extends Component {

	render() {
		return(
      <Text style={styles.name}>待审批</Text>
      
		)
	}
}

var styles = StyleSheet.create({
	wrap : {
		padding: 9,
		flexDirection : 'row',
		justifyContent : 'flex-start',
		alignItems: 'center',
		backgroundColor : '#FFF',
		borderTopWidth : 1,
		marginTop : -1,
		borderBottomWidth : 1,
		borderColor : '#E3E3E3',
	},
	avatar : {
      borderWidth : 1,
      borderRadius : 25,
      borderColor : 'green',
      width: 50,
      height: 50,
    },
    name : {
      fontSize : 14,
      marginLeft : 12,
    }
})

export default Waiting
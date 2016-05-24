import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


class ArrowButton extends Component {

	render() {
		var source = {
			uri : this.props.uri
		}

		return(
			<TouchableOpacity style={styles.button}>
			  <Image
			    source={source}
			    style={styles.img}
			    />
			  <Text style={styles.text}>{this.props.text}</Text>
			  <Text style={styles.arrow}>{'>'}</Text>
			</TouchableOpacity>
		)
	}
}

var styles = StyleSheet.create({
	button : {
		flex : 1,
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
	img : {
		borderWidth : 1,
		borderColor : 'green',
		width: 20,
		height: 20
	},
	text : {
		marginLeft:10,
		fontSize : 14,
		borderWidth : 1,
		borderColor : 'red'
	},
	arrow : {
		fontWeight : "900",
		borderWidth : 2,
		borderColor : 'red',
		flex : 1,
		textAlign : 'right'
	} 
})

export default ArrowButton
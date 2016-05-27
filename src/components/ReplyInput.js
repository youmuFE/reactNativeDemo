import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import KeyboardSpace from './KeyboardSpacer';
class ReplyInput extends Component {
	constructor(props){
	  	super(props);
	}
	render(){
		return (
			<View style={styles.buttonBox}>
				<View style={styles.textInputWrap} >
					<TextInput
					 style={styles.textInput} 
					 multiline={true}
					 />
				</View>
				<View style={styles.sendBox}>
					<Text style={styles.sendText}>发送</Text>
				</View>
				<KeyboardSpace />
			</View>
		);
	}
}

var styles = StyleSheet.create({
	buttonBox : {
		position : 'absolute',
		flexDirection : 'row',
		paddingLeft : 5,
		paddingRight: 5,
		left : 0,
		right : 0,
		bottom : 0,
		borderTopWidth : 1,
		borderTopColor : '#000',
		borderStyle : 'solid',
		alignItems : 'center',
	},
	textInputWrap : {
		flex : 8,
	},
	textInput : {
		height : 48,
	},
	sendBox : {
		flex : 2,
		height : 25,
		borderWidth : 1,
		borderColor : '#000',
		borderStyle : "solid",
		justifyContent : 'center',
		borderRadius : 5,
	},
	sendText : {
		fontSize : 14,
		textAlign : 'center',
	}
});

export default ReplyInput;
import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class ReplyInput extends Component {
	constructor(props){
	  	super(props);
	}
	handleChange(){
		alert(this);
	}
	render(){
		return (
			<View style={styles.buttonBox}>
				<View style={styles.textInputWrap} >
					<TextInput
					 style={styles.textInput} 
					 multiline={true}
					 onChange={this.handleChange.bind(this)}
					 />
				</View>
				<View style={styles.sendBox}>
					<Text style={styles.sendText}>发送</Text>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	buttonBox : {
		overflow : 'hidden',
		flexDirection : 'row',
		borderTopWidth : 1,
		borderTopColor : '#000',
		borderStyle : 'solid',
		paddingLeft : 5,
		paddingRight: 5,
		alignItems : 'center',
	},
	textInputWrap : {
		flex : 8,
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
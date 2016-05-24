import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

class MessageList extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<TouchableOpacity style={styles.list}>
				<View style={styles.main}>
				    <View style={styles.Left}>
				       	<Image style={styles.leftImg} source={{uri:'http://7xpy3m.com1.z0.glb.clouddn.com/5c6defebjw8epti0r9noaj20xc0y1n0x.jpg'}}/>
				   		<View style={styles.leftText}><Text style={{color:'#ffffff',textAlign : 'center'}}>3</Text></View>
				   	</View>
				    <View style={styles.Middle}>
				       <Text>消息中心</Text>
				       <Text>违规举报申请已通过</Text>
				    </View>
				    <View style={styles.right}>
				    	<Text style={styles.rightText}>2016.05.18.15：30</Text>
				    </View>
				</View>
			</TouchableOpacity>
		);
	}
};

export default MessageList;

var styles = StyleSheet.create({
	main :{
		backgroundColor: '#FFF',
      paddingLeft : 10,
      height : 65,
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: '#000',
      flexDirection: 'row',
	},
	 Left : {
      marginTop : 10,
      width : 50,
      height : 50,
    },
    leftImg : {
      height : 50,
      resizeMode: Image.resizeMode.stretch
    },
    leftText : {
      justifyContent : 'center',
      position  : 'absolute',
      width : 15,
      borderRadius : 10,
      backgroundColor : '#ff0000',
      height : 15,
      right : -7,
      top : -7,
    },
    list : {
    	backgroundColor : '#FFF',
    },
    Middle : {
    	marginLeft : 10,
    	justifyContent : 'center',
    },
    right : {
    	flex : 1,
    	marginTop : 5,
    },
    rightText : {
    	textAlign :'right',
    },
})
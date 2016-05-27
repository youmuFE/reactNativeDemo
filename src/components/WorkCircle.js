import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Dimensions,
  Navigator,
  ExtraDimensions,
} from 'react-native';

import RefreshControlExample from './WorkCircleList';

var workCircleArr = [
	{"portrait":"http://7xpy3m.com1.z0.glb.clouddn.com/go_back.png",'username' : '孙雪','content': [{'text':"呵呵哒"},[{"pirture":'http://7xpy3m.com1.z0.glb.clouddn.com/go_back.png'}]]}
]
class WorkCircle extends Component {
	constructor(props){
	  	super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}
	handleClick(){
		console.log(this)
	}
	render () {
		return (
			<View>
				<View style={styles.workCircleTop}>
				   	<StatusBar
				   		translucent={false}
						backgroundColor='rgba(255, 255, 255, 0)'
						barStyle="light-content"
						/>
				    <View style={styles.backLeft}>
				    	<Image style={styles.backIcon} source={{uri: 'http://7xpy3m.com1.z0.glb.clouddn.com/go_back.png'}} />
				    	<Text style={styles.text}>返回</Text>
				    </View>
				    <View style={styles.tilte}>
				    	<Text style={styles.text}>工作圈</Text>
				    </View>
				    <View style={styles.backLeft}>
				    	<Text style={styles.text}>+</Text>
				    </View>
				</View>
				<View style={styles.workCircleList}>
					<View style={styles.self}>
						<Image style={styles.selfPortrait} source={{uri : 'http://7xpy3m.com1.z0.glb.clouddn.com/20141202105822882.jpg'}} />
						<Text style={styles.selfName}>他大舅</Text>
					</View>
				</View>
				<View>
					<RefreshControlExample />
				</View>
			</View>
		)
	}
};

var styles = StyleSheet.create({
	workCircleTop : {
		flexDirection : 'row',
		backgroundColor : '#ccc',
		height : 50,
	},
	textInput : {
		height : 100,
	},
	backLeft : {
		width : 80,
		height : 50,
		justifyContent : 'center',
	    alignItems : 'center',
	   flexDirection : 'row',
	},
	backIcon : {
		height : 20,
		width : 20,
	},
	tilte : {
		flex : 1,
		height : 50,
		justifyContent : 'center',
	    alignItems : 'center',
	},
	text : {
		textAlign : 'center',
		justifyContent : 'center',
		fontSize : 20,
	},
	workCircleList : {
		backgroundColor : '#FFF',
	},
	self : {
		flex : 1,
		height : 105,
		backgroundColor : "#888888",
		alignItems : 'center',
		justifyContent : 'center',
	},
	selfPortrait : {
		height : 60,
		width : 60,
		borderRadius : 50,
	},
	selfName : {
		fontSize : 14,
		color : '#FFF',
	}
});

export default WorkCircle;
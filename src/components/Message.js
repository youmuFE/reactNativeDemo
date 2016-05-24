import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';
import MessageList from './MessageList';
class Message extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged :(r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    }
  }
   render() {
      return (
        <View>
          <TouchableOpacity>
         		<View style={styles.top}>
              <View style={styles.topLeft}>
                <Image style={styles.topLeftImg} source={{uri:'http://7xpy3m.com1.z0.glb.clouddn.com/5c6defebjw8epti0r9noaj20xc0y1n0x.jpg'}}/>
                <View style={styles.topLeftText}><Text style={{color:'#ffffff',textAlign : 'center'}}>3</Text></View>
              </View>
              <View style={styles.topRight}>
                <Text>工作圈</Text>
              </View>
            </View>
          </TouchableOpacity>
          <ListView style={styles.mainButton} dataSource={this.state.dataSource}
            renderRow = {
              (rowData) => {
                return <MessageList dataRow={rowData}/>
              }
            }
          />
        </View>
      )
   }
}

var styles = StyleSheet.create({
    top : {
      backgroundColor: '#FFF',
      paddingLeft : 10,
      height : 65,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      flexDirection: 'row',
    },
    topLeft : {
      marginTop : 10,
      width : 50,
      height : 50,
    },
    topLeftImg : {
      height : 50,
      resizeMode: Image.resizeMode.stretch
    },
    topLeftText : {
      justifyContent : 'center',
      position  : 'absolute',
      width : 15,
      borderRadius : 10,
      backgroundColor : '#ff0000',
      height : 15,
      right : -7,
      top : -7,
    },
    topRight : {
      marginLeft : 10,
      justifyContent: 'center',
    },
    mainButton : {
    marginTop : 10,
  },

})

export default Message
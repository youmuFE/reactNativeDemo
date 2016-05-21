import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Footer extends Component {

   handleClick(){
    alert(1)
   }

   render() {
    console.log('-------------',this.props.navigator)
      return (
        <View style={styles.bottom}>
          <TouchableOpacity 
              onPress={this.handleClick.bind(this)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={styles.text}>消息</Text>
          </TouchableOpacity>
       		
          <TouchableOpacity 
              onPress={this.handleClick.bind(this)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={styles.text,styles.textActive}>工作</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
              onPress={this.handleClick.bind(this)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={styles.text}>我的</Text>
          </TouchableOpacity>
        </View>
      )
   }
}

var styles = StyleSheet.create({
   bottom : {
     flexDirection: 'row',
     height: 50,
     backgroundColor: '#FFF'
   },
   button : {
      flex:1,
      justifyContent: 'center',
      alignItems : 'center'
   },
   text : {
      // flex:1,
   },
   textActive: {
      color: '#5288D9',
   }
})
  


export default Footer
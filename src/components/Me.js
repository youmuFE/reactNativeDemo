import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


class Me extends Component {
   render() {
      return (
     		<View style={styles.wrap}>
          <TouchableOpacity style={styles.top}>
            <Image
              source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
              style={styles.avatar}
              />
            <Text style={styles.item_txt}>孙雪</Text>
          </TouchableOpacity>
          <View style={styles.center}>
            <TouchableOpacity style={styles.item}>
              <Image
                source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                style={styles.item_img}
                />
              <Text style={styles.item_txt}>我的同事</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image
                source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                style={styles.item_img}
                />
              <Text style={styles.item_txt}>我的群组</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.item}>
              <Image
                source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                style={styles.item_img}
                />
              <Text style={styles.item_txt}>设置</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    wrap : {
      flex : 1,
      backgroundColor : '#DDD',
    },
    top : {
      alignItems : 'center',
      flexDirection : 'row',
      borderWidth : 1,
      borderColor : 'red',
      backgroundColor : '#F0F0F2',
      padding : 10 
    },
    avatar : {
      borderWidth : 1,
      borderRadius : 25,
      borderColor : 'green',
      width: 50,
      height: 50,
    },

    center : {
      padding: 10,
      borderWidth : 1,
      borderColor : '#CCC',
      marginVertical : 20,
      borderWidth : 1,
      borderColor : 'red',
    },
    item : {
      flexDirection : 'row',
      justifyContent : 'flex-start',
      alignItems: 'center',
      backgroundColor : '#F0F0F2',
    },
    item_img: {
      borderWidth : 1,
      borderColor : 'green',
      width: 20,
      height: 20,
    },
    item_txt : {
      marginLeft:10,
      fontSize : 18,
      borderWidth : 1,
      borderColor : 'red',
    },   

    bottom : {
      alignItems : 'center',
      margin : 20,
      borderWidth : 1,
      borderColor : 'red',
    },

    
    
})

export default Me
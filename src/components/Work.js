import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'


class Work extends Component {
   render() {

      return (
     		<View style={styles.wrap}>
          <View  style={styles.top}>
            <TouchableOpacity style={styles.item1}>
              <Image
                source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                style={styles.item1_img}
                />
              <Text style={styles.item1_txt}>待审批</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item1}>
              <Image
                source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                style={styles.item1_img}
                />
              <Text style={styles.item1_txt}>已审批</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <View style={styles.itemLine}>
              <TouchableOpacity style={styles.item2}>
                <Image
                  source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                  style={styles.item2_img}
                  />
                <Text style={styles.item2_txt}>销售汇报</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item2}>
                <Image
                  source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                  style={styles.item2_img}
                  />
                <Text style={styles.item2_txt}>销售汇报</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item2}>
                <Image
                  source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                  style={styles.item2_img}
                  />
                <Text style={styles.item2_txt}>销售汇报</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.itemLine}>
              <TouchableOpacity style={styles.item2}>
                <Image
                  source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                  style={styles.item2_img}
                  />
                <Text style={styles.item2_txt}>销售汇报</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item2}>
                <Image
                  source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                  style={styles.item2_img}
                  />
                <Text style={styles.item2_txt}>销售汇报</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item2}>
                
              </TouchableOpacity>

            </View>
          </View>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    wrap : {
      flex : 1,
      backgroundColor: '#F0F0F2'
    },
    top : {
      backgroundColor : '#5288D9',
      flexDirection: 'row',
      justifyContent : 'space-between'
    },
    item1 : {
      alignItems : 'center',
      margin : 20,
    },
    item1_img: {
      borderWidth : 1,
      borderColor : 'green',
      width: 50,
      height: 50,
    },
    item1_txt : {
      // fontSize : 20,
      color : '#FFF',
      borderWidth : 1,
      borderColor : 'red',
    },
    main : {
      flex:1,
      backgroundColor : '#DDD',
    },
    itemLine : {
      
      height:100,
      backgroundColor : '#F0F0F2',
      flexDirection: 'row',
      justifyContent : 'space-between'
    },
    item2 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      padding: 20,
      borderWidth : 1,
      borderColor : '#DDD',
    },
    item2_img: {
      borderWidth : 1,
      borderColor : 'green',
      width: 50,
      height: 50,
    },
    item2_txt : {
      marginTop: 5,
      borderWidth : 1,
    },
})

export default Work
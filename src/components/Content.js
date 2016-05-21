import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class Main extends Component {
   render() {
      var movie = MOCKED_MOVIES_DATA[0];
      return (
     		<View style={styles.main}>
          <View  style={styles.mainTop}>
            <View style={styles.mainTopItem}>
              <Image
                source={{uri: movie.posters.thumbnail}}
                style={styles.thumbnail}
                />
              <Text style={styles.textCenter}>待审批</Text>
            </View>
            <View style={styles.mainTopItem}>
              <Image
                source={{uri: movie.posters.thumbnail}}
                style={styles.thumbnail}
                />
              <Text style={styles.textCenter}>已审批</Text>
            </View>
          </View>
          <View style={styles.mainCenter}>
            <Text>5个button</Text>
          </View>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    main : {
      flex : 1,
      backgroundColor: '#F0F0F2'
    },
    mainTop : {
      backgroundColor : '#5288D9',
      flexDirection: 'row',
      justifyContent : 'space-between'
    },
    mainTopItem : {
      margin : 20,
    },
    thumbnail: {
      borderWidth : 1,
      borderColor : 'green',
      width: 50,
      height: 50,
    },
    textCenter : {
      // fontSize : 20,
      color : '#FFF',
      borderWidth : 1,
      borderColor : 'red',
    }
})

export default Main
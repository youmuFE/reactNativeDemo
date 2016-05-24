import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Waiting from './Waiting'

class Work extends Component {

    openWaitingPage(){

      this.props.navigator.push({
          component : Waiting,
      })
    }

    changeTab(tabIndex){
      var routes = this.props.navigator.getCurrentRoutes;
      this.props.navigator.jumpTo(routes[tabIndex])

     }

   render() {

      return (
        <View style={styles.container}>
          <Header title="工作"/>
       		<View style={styles.wrap}>
            <View  style={styles.top}>
              <TouchableOpacity style={styles.item1} 
                onPress={this.openWaitingPage.bind(this)}>
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
                  <Text style={styles.item2_txt}>销售下单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item2}>
                  <Image
                    source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                    style={styles.item2_img}
                    />
                  <Text style={styles.item2_txt}>商家返点</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemLine}>
                <TouchableOpacity style={styles.item2}>
                  <Image
                    source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                    style={styles.item2_img}
                    />
                  <Text style={styles.item2_txt}>违规举报</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item2}>
                  <Image
                    source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
                    style={styles.item2_img}
                    />
                  <Text style={styles.item2_txt}>公告</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item2}>
                  
                </TouchableOpacity>

              </View>
            </View>
          </View>
          <Footer value={['消息','工作','我的']}
              activeIndex={1}
              handleClick={this.changeTab.bind(this)}/>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor: '#F5FCFF',
      backgroundColor: 'red',
    },
    wrap : {
      flex : 1,
      backgroundColor : '#DDD',
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
import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Navigator,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import Message from '../components/Message'
import Work from '../components/Work'
import Me from '../components/Me'
import Footer from '../components/Footer'

const componentsArr = [{
    'title': '消息',
    'component': Message,
}, {
    'title': '工作',
    'component': Work,
}, {
    'title': '我的',
    'component': Me,
}]

var styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: '#F5FCFF',
    },
    header : {
        height: 49,
        overflow: 'hidden',
        flexDirection : 'row',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderBottomColor: '#BBB',
    },
    wrap : {
        flex: 1,       
        paddingTop:50,
        backgroundColor : '#F0F0F2',
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: 'green',
    }

})

const tabArr = ['消息', '工作', '我的']

// 导航栏的Mapper
var NavigationBarRouteMapper = {
  // 左键
  LeftButton(route, navigator, index, navState) {
        if(route.index > 3)

          return (
            <View style={{
                borderWidth: 2,
                borderColor: 'red',
                alignItems: 'center',
                
              }}>
              <TouchableOpacity
                style={{
                    flex: 1,
                    borderWidth: 2,
                    borderColor: 'red'
                }}>
                <Text style={{
                    flex: 1,
                }}>
                  left
                </Text>
              </TouchableOpacity>
            </View>
          );

  },
  // 右键
  RightButton(route, navigator, index, navState) {

      return (
        <View style={{
            flex:1,
            alignItems:'center',
          }}>
          <TouchableOpacity>
            <Text>
                right
            </Text>
          </TouchableOpacity>
        </View>
      );
  },
  // 标题
  Title(route, navigator, index, navState) {
    
    return (
      <View style={{
        position:'absolute',
        left: 50,
        right: 50 + 72,
        top:0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
          <Text style={{
            fontSize : 20,
          }}>
              {route.title}
          </Text>
      </View>
    );
  }
};


class Home extends Component {

    changeTab(tabIndex){
        this.setState({
            tabIndex : tabIndex
        })
        this.refs.navi.jumpTo(componentsArr[tabIndex])
    }

    constructor(props) {
        super(props);
        this.state = {
            tabIndex : 0
        }
    }

    render() {

        return (
            <View style={styles.container}>

                <Navigator initialRoute={ componentsArr[0] }
                    initialRouteStack={ componentsArr }
                    configureScene={
                        (route) => {
                            return Navigator.SceneConfigs.HorizontalSwipeJump;
                        }
                    }
                    ref='navi'
                    style={{
                        flex: 1,
                    }}
                    renderScene={
                        (route, navigator) => {
                            let Component=route.component;
                            return <View style={{
                                        marginTop: 51,
                                        flex: 1
                                    }}>
                                <Component {...route.params} navigator={navigator}/>
                            </View>
                        }
                    }
                    navigationBar={
                        <Navigator.NavigationBar
                            routeMapper={NavigationBarRouteMapper}
                            style={styles.header}               
                        />
                    }
                />
                <Footer value={tabArr}
                      activeIndex={this.state.tabIndex}
                      handleClick={this.changeTab.bind(this)}/>
            </View>
        );
    }

    
    
}

export default Home

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
      borderWidth: 2,
      borderColor: 'orange',
      flexDirection : 'row',
      justifyContent: 'center',
    },
    navContainer : {
      flex: 1,
      borderWidth: 2,
      borderColor: 'green',
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
    
      return (
        <View>
          <TouchableOpacity
            underlayColor='transparent'>
            <Text>
              后退
            </Text>
          </TouchableOpacity>
        </View>
      );

  },
  // 右键
  RightButton(route, navigator, index, navState) {

      return (
        <View>
          <TouchableOpacity
            onPress={() => route.onPress()}>
            <Text>
              右键
            </Text>
          </TouchableOpacity>
        </View>
      );
  },
  // 标题
  Title(route, navigator, index, navState) {
    return (
      <View>
        <Text>
          应用标题
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
                    style={{flex:1, borderColor:'green', borderWidth: 5}}
                    initialRouteStack={ componentsArr }
                    configureScene = {
                        (route) => {
                            return Navigator.SceneConfigs.HorizontalSwipeJump;
                        }
                    }

                    navigationBar={
                      <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}/>}
                    
                    renderScene={
                        (route, navigator) => {
                            let Component=route.component;
                            /*我本意是想把这里渲染的组件做成笨组件(这里并不是redux里的纯粹的渲染组件,它内部可以有自己的路由,
                            但其本身的渲染与父组件的路由无关),从而实现解耦,便于复用.
                            不过这好像违背了Navigator原本的思想,比如在当前组件环境下的navigator只能借助ref到这个路由栈的*/
                            return <Component {...route.params} navigator={navigator} styles={styles.wrap}/>
                        }
                    } />
                <Footer value={['消息','工作','我的']}
                      activeIndex={this.state.tabIndex}
                      handleClick={this.changeTab.bind(this)}/>
            </View>
        );
    }

    
    
}

export default Home

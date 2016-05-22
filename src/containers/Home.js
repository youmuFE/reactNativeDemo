import React, {Component} from 'react'
import {
  Image,
  StyleSheet,
  Navigator,
  Text,
  View,
} from 'react-native'

import Header from '../components/Header'
import Main from '../components/Main'
import Content from '../components/Content'
import Footer from '../components/Footer'

import Message from '../components/Message'
import Work from '../components/Work'
import Me from '../components/Me'

const componentsArr = [
  {
    'name' : 'message',
    'component' : Message,
  },
  {
    'name' : 'work',
    'component' : Work,
  },
  {
    'name' : 'me',
    'component' : Me,
  }
]

const tabArr = ['消息','工作','我的']

class Home extends Component {
   
   constructor(props) {
      super(props);
      this.state  = {
        curIndex : 0,
        curName : '消息',
      }
   }

   changeTab(tabIndex){
    
    //理想状态是,不改变的不重绘,只刷新中间部分
    //这种方式每次Header,Footer都重绘,也不能保存历史(回退),还不如不用Navigator
    //该页面的\路由应当在初始化时声明一个路由栈,来回切换

    /* 源码可知,传入的为一个完整的route对象,且能被indexOf匹配
    jumpTo: function(route) {
      var destIndex = this.state.routeStack.indexOf(route);
      invariant(
        destIndex !== -1,
        'Cannot jump to route that is not in the route stack'
      );
      this._jumpN(destIndex - this.state.presentedIndex);
    },
    */
    var curTab = componentsArr[tabIndex]
    this.state  = {
        curIndex : tabIndex,
        curName : curTab.name,
    }
    //这里取到的路由竟然是Home本身,是由父组件传来的!! 坑爹啊,要么在render函数的
    //navigator的渲染方法内部调??
    // var routes = this.refs.nav.getCurrentRoutes()
    // console.log(routes.indexOf({
    //     'name' : 'me',
    //     'component' : Me,
    //   }))
    // console.log(routes.indexOf({
    //     'name' : 'me'
    //   }))
    // console.log(routes.indexOf(componentsArr[2]))
    
    //丑陋实现,不过效率不错
    this.refs.nav.jumpTo(componentsArr[tabIndex])
    
   }


   render() {
      return (
	      <View style={styles.container}>
	        <Header title={tabArr[this.state.curIndex]}/>
	        <Main>
            <Navigator
              initialRoute={componentsArr[0]}
              initialRouteStack={componentsArr}
              ref="nav"
              configureScene={(route) => {
                return Navigator.SceneConfigs.HorizontalSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                /*我本意是想把这里渲染的组件做成笨组件(这里并不是redux里的纯粹的渲染组件,它内部可以有自己的路由,
                但其本身的渲染与父组件的路由无关),从而实现解耦,便于复用.
                不过这好像违背了Navigator原本的思想,比如在当前组件环境下的navigator是取不到这个路由栈的*/
                return <Component {...route.params} navigator={navigator} />
              }} /> 

          </Main>
	        <Footer value={tabArr} 
              activeIndex={this.state.curIndex}
              handleClick={this.changeTab.bind(this)}/>
	      </View>
	    );
	}
}

var styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default Home
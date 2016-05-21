import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';


import Login from './src/containers/Login';
import Message from './src/components/Message'


/*一.理想中的实现方式为:
  <Header />
  <Navigator>
  <Footer>
然后Navigator的renderScene里改变当前组件的state,从而让Header和Footer渲染出不同的样式
 try了一下貌似不行, 不作为根组件的Navigator根本没有显示是什么鬼 
 renderScene函数源码 没找到...
*/
// 锲而不舍地重试了一下 解决了 nice 解决思路为:

/*
0.没有报错,react以及rn有着很完备的错误检测以及报错信息,没报错说明用法没问题
1.在navi渲染的组件Login的render方法里加了个alert,发现弹出了,说明navi的功能正常
2.给包裹navi的view层加了背景色,发现它不是全屏的,猜想可能navi是异步渲染的,导致父组件没有撑开
3.改变view的高度,发现露出了Login组件!!可以了!!之前没显示果然是因为container没撑开,把它挡住了
*/

/*二.退而求其次,采用路由提前声明的方式? 初始化路由栈 initialRouteStack属性

Navigator的renderscene函数可以返回另一个Navigator,通过这种依次嵌套的方式
  像reactRouter一样提前声明路由?? 声明的时候就声明路由  navi的子路由 
 */

/*三.navigationBar的使用?
  1.使用原生的<Navigator.NavigationBar> 该组件有一个routeMapper属性,该属性的值需要对象类型
  该对象(可)包含三个固定的属性,均为函数,返回值为组件
    LeftButton(route, navigator, index, navState) {}
    Title(route, navigator, index, navState) {}
    RightButton(route, navigator, index, navState) {}
  注:<Navigator.NavigationBar>的源码位置在
    node_modules\react-native\Libraries\CustomComponents\Navigator
  2.我猜想应该是可以使用自定义对象的! 留着实践
*/

class HomeRoute extends Component {

    render () {

      let defaultName = 'message';
      let defaultComponent = Message;

      return (
          <Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route) => {
              return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }} /> 
      )
    }
}

class rnDemo extends Component {
   render() {
       let defaultName = 'loginPage';
       let defaultComponent = Login;


       return ( 
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)',height: 200}}>
            <Text>fff</Text>
           <Navigator
             initialRoute={{ name: defaultName, component: defaultComponent }}
             configureScene={(route) => {
               return Navigator.SceneConfigs.VerticalDownSwipeJump;
             }}
             renderScene={(route, navigator) => {
               let Component = route.component;
               return <Component {...route.params} navigator={navigator} />
             }} />   
             </View>
       );
   }


}

AppRegistry.registerComponent('MyProject', () => rnDemo);

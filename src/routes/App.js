import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import LoginPage from '../containers/LoginPage'
import Home from './Home'
import Footer from '../components/Footer'
import Message from '../components/Message'
import Work from '../components/Work'
import Me from '../components/Me'

var styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor: '#F5FCFF',
        marginTop: 51,
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

class AppComponent extends Component {
    constructor(){
      super()
      this.state = {
        tabIndex : 0,
        showFooter : true
      }
    }

    showFooter(index){
      console.log(this.state.tabIndex, index)
      if(!this.state.showFooter || this.state.tabIndex != index){
        this.setState({
          tabIndex: index,
          showFooter : true
        })  
      }
    }
    hideFooter(){
     if(this.state.showFooter){
        this.setState({
          showFooter : false
        })  
      } 
    }

    changeTab(tabIndex){
      this.setState({
          showFooter : true,
          tabIndex : tabIndex
      })
      var nav = this.refs.nav;
      var routes = nav.getCurrentRoutes();
      alert(routes.length)
      nav.jumpTo(routes[tabIndex])
    }

   render() {
      let defaultName = 'loginPage';
      let defaultComponent = Message;
      
      return (
        <View style={{ flex : 1}}>
  	      <Navigator style={{ flex: 1 ,backgroundColor: 'red'}}
               initialRoute={componentsArr[0]}
               initialRouteStack={componentsArr}
               configureScene={(route) => {
                 return Navigator.SceneConfigs.HorizontalSwipeJump;
               }}
               ref='nav'
               renderScene={(route, navigator) => {
                  // let title = route.title;
                  console.log(navigator.getCurrentRoutes())
                  let index = navigator.getCurrentRoutes().indexOf(route)
                  if(index >=0 && index <=2){
                    this.showFooter(index);
                  }else{
                    this.hideFooter();
                  }

                  // if(title == '消息' || title == '工作' || title == '我1的'){
                    
                  // }else{
                    
                  // }
                  let Component = route.component
                   return <View style={styles.container}>
                       <Component {...route.params} navigator={navigator}/>
                   </View>
               }}
               navigationBar={
                   <Navigator.NavigationBar
                       routeMapper={NavigationBarRouteMapper}
                       style={styles.header}               
                   />
               } />
          {this.state.showFooter ? <Footer value={tabArr}
                  activeIndex={this.state.tabIndex}
                  handleClick={this.changeTab.bind(this)}
                  /> : null}
        </View>
	    );
	}
}

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
    if(false)
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


export default AppComponent
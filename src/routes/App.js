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
        // backgroundColor: '#F5FCFF',
        backgroundColor: 'yellow',
        marginTop:53,
        // marginBottom: 100,
        // position:'absolute',
        // top:51,
        // bottom: 51,
        // left:0,
        // right:20
    },
    header : {
        // position:'absolute',
        
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // // overflow: 'hidden',
        // flexDirection : 'row',
        // justifyContent: 'center',
        // backgroundColor: 'green',

        // borderWidth: 4,
        // borderColor: 'green',
        // backgroundColor: '#F8F8F8',
        // alignItems: 'center',
        // backgroundColor: '#fff',
        // borderBottomColor: '#eee',
        // borderColor: 'transparent',
        // borderWidth: 1,
        // justifyContent: 'center',
        // height: 44,
        // flexDirection: 'row'
    },
    wrap : {
        flex: 1,       
        
        backgroundColor : '#F0F0F2',
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: 'green',
    }

})

class AppComponent extends Component {
    constructor(){
      super()
      this.state = {
        tabIndex : 0,
        showFooter : true
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
      let initialRoute = {
          title: '消息',
          component: Home
      };
      
      return (
        
  	      <Navigator style={{flex: 1 ,backgroundColor: 'red'}}
               initialRoute={initialRoute}
               configureScene={(route) => {
                 return Navigator.SceneConfigs.HorizontalSwipeJump;
               }}
               ref='nav'
               renderScene={(route, navigator) => {
                  
                  console.log('father: ',navigator.getCurrentRoutes())
                  let Component = route.component
                   return (<View style={styles.container}>
                       <Component {...route.params} navigator={navigator}/>
                   </View>)
               }}
               navigationBar={
                <Navigator.NavigationBar
                    routeMapper={NavigationBarRouteMapper}
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderBottomColor: '#eee',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        justifyContent: 'center',
                        height: 44,
                        flexDirection: 'row',
                        backgroundColor: '#666',
                        
                    }}               
                />
                        
               } />

	    );
	}
}
// <Navigator.NavigationBar
//                        routeMapper={NavigationBarRouteMapper}
//                        style={styles.header}               
//                    />
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

    // showFooter(index){
    //   console.log(this.state.tabIndex, index)
    //   if(!this.state.showFooter || this.state.tabIndex != index){
    //     this.setState({
    //       tabIndex: index,
    //       showFooter : true
    //     })  
    //   }
    // }
    // hideFooter(){
    //  if(this.state.showFooter){
    //     this.setState({
    //       showFooter : false
    //     })  
    //   } 
    // }
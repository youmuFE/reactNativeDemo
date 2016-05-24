import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';


import Login from './src/containers/Login';
import Home from './src/containers/Home';
import WorkCircle from './src/components/WorkCircle';

class rnDemo extends Component {
   render() {
       let defaultName = 'WorkCircle';
       let defaultComponent = WorkCircle;
       
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
       );
   }


}

AppRegistry.registerComponent('MyProject', () => rnDemo);

//以后要做独立路由的时候用,暂时废弃
// class HomeRoute extends Component {

//     render () {

//       let defaultName = 'loginPage';
//       let defaultComponent = Login;

//       return (
//           <Navigator
//             initialRoute={{ name: defaultName, component: defaultComponent }}
//             configureScene={(route) => {
//               return Navigator.SceneConfigs.VerticalDownSwipeJump;
//             }}
//             renderScene={(route, navigator) => {
//               let Component = route.component;
//               return <Component {...route.params} navigator={navigator} />
//             }} /> 
//       )
//     }
// }



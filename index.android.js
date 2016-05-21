import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';


import Login from './src/containers/Login';

class rnDemo extends Component {
   render() {
       let defaultName = 'loginPage';
       let defaultComponent = Login;
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

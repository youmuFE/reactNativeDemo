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


class AppComponent extends Component {
  // import Home from './Home'
   render() {
      let defaultName = 'loginPage';
      let defaultComponent = Home;
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

export default AppComponent
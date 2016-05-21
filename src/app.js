/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';
import Splash from './Splash';

const defaultRoute = {
  component: Splash
};

class navigation extends Component {
  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
  _renderNavBar() {
    const styles = {
      title: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      },
      button: {
        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
      },
      buttonText: {
        fontSize: 18, color: '#FFFFFF', fontWeight: '400'
      }
    }

    //源码在\node_modules\react-native\Libraries\CustomComponents\Navigator
    //只有这三个有效属性（组件）
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if(index == 1) {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>消息--</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>消息</Text>
            </TouchableOpacity>
          );
        }
      },
      Title(route, navigator, index, navState) {
        if(index == 2) {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>工作 --</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>工作</Text>
            </TouchableOpacity>
          );
        }
      },
      RightButton(route, navigator, index, navState) {
        // if(index > 0 && route.rightButton) {
        if(index == 3) {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>我的--</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>我的</Text>
            </TouchableOpacity>
          )
        }
      },
    };

    return (
      <Navigator.NavigationBar
        style={{
          alignItems: 'center',
          backgroundColor: '#55ACEE',
          shadowOffset:{
              width: 1,
              height: 0.5,
          },
          shadowColor: '#55ACEE',
          shadowOpacity: 0.8,          
          }}
        routeMapper={routeMapper}
      >
      </Navigator.NavigationBar>
    );
  }
  render() {
    console.log(this.props.navigator)
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene}
        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 74)}}
        navigationBar={this._renderNavBar()} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyProject', () => navigation);

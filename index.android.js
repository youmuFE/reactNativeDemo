import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import App from './src/routes/App';

class rnDemo extends Component {
   render() {
       return <App></App>;
   }
}

AppRegistry.registerComponent('MyProject', () => rnDemo);
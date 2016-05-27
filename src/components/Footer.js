import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'

var guid = require('guid');
var {Map} = require('./immutable.min');

var COMPONENT_NAMES = [];

var navStatePresentedIndex = function(navState) {
  if (navState.presentedIndex !== undefined) {
    return navState.presentedIndex;
  }
  // TODO: rename `observedTopOfStack` to `presentedIndex` in `NavigatorIOS`
  return navState.observedTopOfStack;
};

class Footer extends Component {

    constructor(props) {
       super(props);
       this.arr = this.props.value;
       this._componentBuilders = [];
       
       
       var mapper = this.props.routeMapper;
       for(var i in mapper){
        var componentName = mapper[i].name;
        COMPONENT_NAMES.push(componentName)
        this._componentBuilders[componentName] = new Map();
        this._descriptors[componentName] = new Map();
       }
       
    }

    componentWillMount() {
      this._key = guid();
    }


   handleClick(tabIndex){
      var nav = this.props.navigator;
      var routes = nav.getCurrentRoutes();
      var navState = this.props.navState;
      console.log(navState)
      nav.jumpTo(routes[tabIndex])
   }

   render() {


      var navState = this.props.navState;
      console.log(navState.routeStack)
      var components = navState.routeStack.map((route, index) =>
        this._componentBuilders.map(componentBuilder =>
          this._getComponent(componentBuilder, route, index)
        )
      );

      var test = <Text>123123</Text>
      console.log(test)
      console.log(components[0][0])
      

      // console.log(components)
      return (
        <View key={this._key} style={this.props.style}>
          {components}
        </View>
      )
   }

   _getComponent(componentBuilder, route, index) /*?Object*/ {

      // 其实可以利用这个特性存放字符串，比存函数快
      // alert(componentBuilder.name)
      var componentName = componentBuilder.name;
      

     if (this._descriptors[componentName].includes(route)) {
      console.log("msg")
       return this._descriptors[componentName].get(route);
     }

     // var rendered = null;
      var content = componentBuilder(
        this.props.navState.routeStack[index],
        this.props.navigator,
        index,
        this.props.navState
      )

      // console.log(content)

     // var content = this.props.routeMapper[componentName](
     //   this.props.navState.routeStack[index],
     //   this.props.navigator,
     //   index,
     //   this.props.navState
     // );
     if (!content) {
       return null;
     }

     this._descriptors[componentName] = this._descriptors[componentName].set(route, content);

     return content;

     console.log('**********************')
     var componentIsActive = index === navStatePresentedIndex(this.props.navState);
     // var initialStage = componentIsActive ?
     //   this.props.navigationStyles.Stages.Center :
     //   this.props.navigationStyles.Stages.Left;
     
     rendered = (
       <View
         ref={(ref) => {
           this._components[componentName] = this._components[componentName].set(route, ref);
         }}
         pointerEvents={componentIsActive ? 'box-none' : 'none'}>
         {content}
       </View>
     );

     
     return rendered;
   }
}

var styles = StyleSheet.create({
   bottom : {
     flexDirection: 'row',
     height: 50,
     backgroundColor: '#FFF'
   },
   button : {
      flex:1,
      justifyContent: 'center',
      alignItems : 'center'
   },
   text : {
      // flex:1,
   },
   textActive: {
      fontSize: 20,
      color: '#5288D9',
   }
})
  
// <View style={styles.bottom}>
//           {this.arr.map((item, index) => {
//             if(index === this.props.activeIndex){
//               return(<TouchableOpacity
//                         key={index}
//                         onPress={this.handleClick.bind(this,index)} 
//                         activeOpacity={0.8}
//                         style={styles.button}>
//                       <Text style={[styles.text, styles.textActive]}>{item}</Text>
//                     </TouchableOpacity>
//               )
//             }else{
//               return(<TouchableOpacity 
//                         key={index}
//                         onPress={this.handleClick.bind(this,index)} 
//                         activeOpacity={0.8}
//                         style={styles.button}>
//                       <Text style={styles.text}>{item}</Text>
//                     </TouchableOpacity>
//                 )
//             }
//           })}

export default Footer
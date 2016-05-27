import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Navigator,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import Message from '../components/Message'
import Work from '../components/Work'
import Me from '../components/Me'
// import Footer from '../components/Footer'

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

var styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue'
        // backgroundColor: '#F5FCFF',
    },
    wrap : {
        flex: 1,       
        paddingBottom:50,
        backgroundColor : '#F0F0F2',
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: 'green',
    }

})

const tabArr = ['消息', '工作', '我的']

// 导航栏的Mapper
var routeMapper = {
  // 左
  Left(route, navigator, index, navState) {
        var color = 'transparent'
        if(route.title == '消息'){
            color = 'blue'
        }
        return (
          <TouchableOpacity style={{
            flex: 1,
            backgroundColor: color
            // justifyContent: 'flex-end',
          }}
            onPress={() => navigator.jumpTo(route)}>
            <Text>1</Text>
          </TouchableOpacity>
        );

  },
  // 中
  Center(route, navigator, index, navState) {
    var color = 'transparent'
        if(route.title == '工作'){
            color = 'blue'
        }
        return (
          <TouchableOpacity style={{
            flex:1,
            backgroundColor: color
          }}
          onPress={() => navigator.jumpTo(route)}>
                <Text>2</Text>
          </TouchableOpacity>
        );
  },
  // 右
  Right(route, navigator, index, navState) {
var color = 'transparent'
        if(route.title == '我的'){
            color = 'blue'
        }
      return (
        <TouchableOpacity style={{
           flex:1,
           backgroundColor: color
        }}
        onPress={() => navigator.jumpTo(route)}>
            <Text>3</Text>
        </TouchableOpacity>)
  },
  
};


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex : 0
        }
    }

    render() {

        return (
            <View style={styles.container}>

                <Navigator initialRoute={ componentsArr[0] }
                    initialRouteStack={ componentsArr }
                    configureScene={
                        (route) => {
                            return Navigator.SceneConfigs.HorizontalSwipeJump;
                        }
                    }
                    ref='navi'
                    style={{
                        flex: 1,
                        // justifyContent: 'center',
                        backgroundColor:'#0F0'
                    }}
                    renderScene={
                        (route, navigator) => {
                            // alert(route.title)
                            let Component=route.component;
                            return <View style={{
                                        marginBottom: 51,
                                        flex: 1
                                    }}>
                                <Component {...route.params} navigator={navigator}/>
                            </View>
                        }
                    }
                    navigationBar={
                        <Navigator.NavigationBar
                            style={{
                                backgroundColor:'yellow',
                                height: 50,
                                flexDirection: 'row'
                            }}
                            routeMapper={routeMapper}/>
                    }
                />
                
            </View>
        );
    }
}

export default Home

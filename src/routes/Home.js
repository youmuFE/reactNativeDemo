import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Navigator,
    Text,
    View,
} from 'react-native'

import Message from '../components/Message'
import Work from '../components/Work'
import Me from '../components/Me'

const componentsArr = [{
    'name': 'message',
    'component': Message,
}, {
    'name': 'work',
    'component': Work,
}, {
    'name': 'me',
    'component': Me,
}]

const tabArr = ['消息', '工作', '我的']

class Home extends Component {

    constructor(props) {
        super(props);
    }

    changeTab(tabIndex) {

        var curTab = componentsArr[tabIndex]
        this.setState({
            curIndex: tabIndex,
            curName: curTab.name,
        })

        //丑陋实现,不过效率不错
        this.refs.nav.jumpTo(componentsArr[tabIndex])
    }

    render() {

        return (<Navigator initialRoute={ componentsArr[1] }
            initialRouteStack={ componentsArr }
            configureScene = {
                (route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }
            }
            renderScene={
                (route, navigator) => {
                    let Component=route.component;
                    /*我本意是想把这里渲染的组件做成笨组件(这里并不是redux里的纯粹的渲染组件,它内部可以有自己的路由,
                    但其本身的渲染与父组件的路由无关),从而实现解耦,便于复用.
                    不过这好像违背了Navigator原本的思想,比如在当前组件环境下的navigator只能借助ref到这个路由栈的*/
                    return <Component {...route.params} navigator={navigator} />
                }
            }/>
        );
    }
}

export default Home

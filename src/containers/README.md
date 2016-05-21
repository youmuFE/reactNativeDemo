##文档里查到的Navigator例子均为使用Navigator作为某个组件render方法的唯一返回值,这在某些情况下有些不符合人类思维(或者说是我的思维...),例如:
* 微信,典型的上中下布局,进入消息/朋友/朋友圈分别指向三个页面,他们在互相切换时主要是页面中间部分发生改变,上部只是改变了几个文字,下部只是当前tab页的图标变为高亮


###在这种需求下
###一、我理想的实现方式为:
```javascript
  <View>
    <Header />
    <Navigator />
    <Footer />
  </View>
  
```

  
 Navigator的renderScene里根据路由改变当前组件的state,从而让Header和Footer根据state渲染出不同的内容或样式
 
 try了一下不太行, 展示出的只有Header而已,似乎不作为组件唯一返回值的Navigator根本不会显示 
 想去找一下这个组件的 renderScene函数实现 功力不够,没找到...

### 锲而不舍地重试了一下 解决了 nice 解决思路为:


* 0.react以及rn有着很完备的错误检测以及报错信息,既然没报错,猜想用法没问题
* 1.在由Navigator渲染的组件Login的render方法里加了个alert,发现弹出了,说Navigator的功能正常,更加重了我的怀疑
* 2.给包裹Navigator的view层加了背景色,发现它不是全屏的,猜想可能navi是异步渲染的,导致父组件没有撑开
* 3.改变view的高度,发现露出了Login组件!!可以了!!之前没显示果然是因为container没撑开,把它挡住了

###二、在(一)还没有搞定的时候,我退而求其次,采用路由提前声明的方式? 
* 可以使用Navigator的initialRouteStack属性来初始化路由栈 
* Navigator的renderscene函数可以返回另一个Navigator,通过这种依次嵌套的方式
  像react-router一样提前声明好整个用用的路由
 

###三、navigationBar的使用?
  * 1.使用原生的<Navigator.NavigationBar> 该组件有一个routeMapper属性,该属性的值需要对象类型
  该对象(可)包含三个固定的属性,均为函数,返回值为组件
  ```javascript
    LeftButton(route, navigator, index, navState) {
        //return Component
    }
    Title(route, navigator, index, navState) {
        //return Component
    }
    RightButton(route, navigator, index, navState) {
        //return Component
    }
  ```
  注:<Navigator.NavigationBar>的源码位置在
  ```
    node_modules\react-native\Libraries\CustomComponents\Navigator
    ```
  * 2.上面的方法有一定的局限性,比如有4个按钮就没办法了,我猜想应该是可以使用自定义对象的! 留着实践

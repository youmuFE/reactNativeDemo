##目录结构
* reactNativeDemo
  * reference  参考案例,内容与项目本身无关(感谢作者)
  * src 源代码
    * components 组件(类似Redux中dumb components的概念)
    * containers 容器(类似Redux中smart components的概念)
    * routes 路由(负责处理页面的跳转逻辑)
  * index.android.js 安卓入口文件
  * index.ios.js 苹果入口文件


##打开方式
#### 注意:前提是您已经配置好RN的开发环境
###### 参照  `http://reactnative.cn/docs/0.26/getting-started.html#content`
----

克隆项目后 进入reactNativeDemo/目录下

* `npm install && npm start`
* 安卓版本 `react-native run-android`
* ios 使用XCode打开  `ios/MyProject.xcodeproj`

##注意
 * navigator的navigationBar有毒，背后用的是绝对定位，要做有动画的导航就写到渲染结果组件里，或渲染时返回一个嵌套组件 ``<View><Component navitagor={navigator}/></View>``  不需要做动画就做到路由的外面 ``<Header /><Navigator /><Footer />`` 最起码安卓4.4使用navigationBar的定位很痛苦

'use strict';

import React from 'react-native';
const {
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
  View,
} = React;

const styles = StyleSheet.create({
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    height : 500,
  },
});
//创建行组件
const Row = React.createClass({
  _onClick: function() {
    this.props.onClick(this.props.data);
  },
  render: function() {
    return (
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
    );
  },
});
//创建行上边视图组件
const RowTop = React.createClass({
  render : function(){
    return (
      <View>
        <View><Image source={{uri:"null"}}/></View>
        <View>
          <Text>孙雪</Text>
          <Text>2015.05.16 10:20</Text>
        </View>
      </View>
    );
  }
});

//创建行内容部分
const RowContent = React.createClass({
  render : function() {
    if(this.props.content.images.length !== 0){
      const img =  this.props.content.images.map((uri, i) => {
        return <Image source={{uri : uri}} />
      });
      return (
          <View>
            <View>
              <Text>{this.props.content.text}</Text>
            </View>
            {img}
          </View>
        );
    }
  }
});

//创建行下边组件部分
const RowBottom = React.createClass({
  render : function(){
    return (
        <View>
          <View>
            <Text>删除</Text>
          </View>
          <View>
            <Image source={{uri : ''}} />
          </View>
          <View>
            <Image source={{uri : ''}}/>
          </View>
        </View>
      );
  }
});

//创建行回复组件
const RowReply = React.createClass({
  render : function(){
    const reply = this.props.content.reply.map((value, i) => {
      return 
    })
    const praise = this.props.content.praise.map((value, i) => {
        return <PraiseList key={i} data={value} />; 
    })
    return (
        s
      );
  }
});

//点赞列表组件
const PraiseList = React.createClass({
  render : function(){
    if(this.props.key == 0){
      return <View><Text>{this.props.data}</Text></View>
    } else{
      return <View><Text>,</Text><Text>{this.props.data}</Text></View>
    }
  }
});
//回复列表组件
const ReplyList = React.createClass({
  render : function(){

  }
});
const RefreshControlExample = React.createClass({
  statics: {
    title: '<RefreshControl>',
    description: 'Adds pull-to-refresh support to a scrollview.'
  },

  getInitialState() {
    return {
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row' + i, clicks: 0})),
    };
  },

  _onClick(row) {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  },

  render() {
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={this._onClick}/>;
    });
    return (
      <ScrollView
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }>
        {rows}
      </ScrollView>
    );
  },

  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
      .map((val, i) => ({
        text: 'Loaded row' + (+this.state.loaded + i),
        clicks: 0,
      }))
      .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 5000);
  },
});

export default RefreshControlExample;
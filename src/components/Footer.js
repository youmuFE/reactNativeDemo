import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Footer extends Component {

    constructor(props) {
       super(props);
       this.arr = this.props.value;
    }


   handleClick(tabName){
      this.props.handleClick(tabName)
   }

   render() {
      
      return (
        <View style={styles.bottom}>
          {this.arr.map((item, index) => {
            if(index === this.props.activeIndex){
              return(<TouchableOpacity
                        key={index}
                        onPress={this.handleClick.bind(this,index)} 
                        activeOpacity={0.8}
                        style={styles.button}>
                      <Text style={[styles.text, styles.textActive]}>{item}</Text>
                    </TouchableOpacity>
              )
            }else{
              return(<TouchableOpacity 
                        key={index}
                        onPress={this.handleClick.bind(this,index)} 
                        activeOpacity={0.8}
                        style={styles.button}>
                      <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
                )
            }
          })}
        </View>
      )
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
      color: '#5288D9',
   }
})
  


export default Footer
import React, { Component } from "react";
import { Text,View } from "native-base";
import moment  from "moment";

export default class Time extends Component {
  constructor(props) {
    super(props)
    this.data = this.props
    
  }
  

  render() {
      console.log(this.data)
    const time = moment(this.data || moment.now()).fromNow()
    return (
      <View>
        <Text note> {time}</Text>
      </View>
    );
  }
}

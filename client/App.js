import { Text, View } from 'react-native'
import React, { Component } from 'react'

import {multiply} from 'react-native-related-digital';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result : "yok"
    }
  }

componentDidMount(){
  // const rnrd = new RelatedDigital()
  const result = multiply(5, 5);
  this.setState({
    result:result
  })
}
  render() {
    return (
      <View>
        <Text>App : {this.state.result}</Text>
      </View>
    )
  }
}
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RandomMain extends Component {
  static navigationOptions = {
    title: 'Random time',
  };

  render() {
    return (
      <View>
        <Text>This is main screen</Text>
      </View>
    )
  }
}

export default RandomMain;

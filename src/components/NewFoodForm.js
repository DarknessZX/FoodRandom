import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button , Card } from './common';

class NewFoodForm extends Component {
  static navigationOptions = {
    title: 'Add new food',
  };

  render() {
    return (
      <Card>
        <Button>Add food</Button>
      </Card>
    )
  }
}

const styles = {

}

export default NewFoodForm;

import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
  <View style={styles.containerStyle}>
      {props.children}
  </View>
)

const styles = {
  containerStyle : {
    backgroundColor : '#ffffff',
    flex : 1,
    height : 400,
  }
}

export { Card }

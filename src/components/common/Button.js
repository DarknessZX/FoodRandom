import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  buttonStyles: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#ffd417',
  },
};

const Button = (props) => {
  return (
    <View style={styles.buttonStyles}>
      <Text>{props.children}</Text>
    </View>
  );
}

export { Button };

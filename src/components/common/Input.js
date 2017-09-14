import React from 'react';
import { View, TextInput } from 'react-native';

const Input = (props) => (
  <View>
    <TextInput
      style={styles.InputStyle}
      placeholder={props.textholder}
      onChangeText={text=props.onChangeText}
    />
  </View>
)

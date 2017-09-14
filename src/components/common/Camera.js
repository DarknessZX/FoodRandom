import React, { Component } from 'react';
import { View } from 'react-native';
import Camera from 'react-native-camera';

class CameraView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}

        >

        </Camera>
      </View>
    );
  }
}

export { CameraView };

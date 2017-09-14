import React from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Router from './Router'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {
  container: {
    flex : 1,
    height : 400
  },
  topPadding : {
    height : 30,
    backgroundColor : '#b3cc2d',
  }
};

export default class App extends React.Component {
  componentWillMount() {
    console.log(PermissionsAndroid);
    requestCameraPermission();
  }

  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <View style={ { flex : 1 } }>
        <View style={styles.topPadding}>
        </View>
        <View style={styles.container}>
          <Router />
        </View>
      </View>
    );
  }
}

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { RNTextDetector } from 'react-native-text-detector';

export default class CameraScreen extends Component {

  constructor(props){
    super(props);
 
    this.state = {
      recording : false,
      processing : false
    }
 }
  
  render() {
    
    let button = (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('EnterData')}
        style={styles.capture}
      >
        <Text style={{ fontSize: 14 }}> BACK </Text>
      </TouchableOpacity>
    );

    let button2 = ( 
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Enter')}
        style={styles.capture}
      >
        <Text style={{ fontSize: 14 }}> TAKE </Text>
      </TouchableOpacity>
    )


    if (this.state.processing) {
      button = (
        <View style={styles.capture}>
          <ActivityIndicator animating size={18} />
        </View>
      );
    }

    takePicture = async () => {
      const { store } = this.props.store;
      try {
        store.loaderTrue();
        console.log('try', store.loader);
        const options = {
          quality: 0.8,
          base64: true,
          skipProcessing: true,
        };
        const { uri } = await this.camera.takePictureAsync(options);
        const visionResp = await RNTextDetector.detectFromUri(uri);
        this.props.store.store.addItem(visionResp);
        console.log('visionResp', visionResp);
      } catch (e) {
        console.warn(e);
      }
      store.loaderFalse();
      let id = store.memoArray.length - 1;
      store.setEditId(parseInt(id));
      this.props.navigation.navigate('Postview', {
        otherParam: id,
      });
      console.log('try outside', store.loader);
    };


    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
         flashMode={RNCamera.Constants.FlashMode.torch}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}

        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>

          {button}
          {button2}
        
        </View>


      </View>
    );
  }
  takePicture = async function () {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  
  

 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
//AppRegistry.registerComponent('CameraScreen', () => CameraScreen);
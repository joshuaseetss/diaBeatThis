import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput
} from 'react-native';

export default class SplashScreen extends React.Component {


    render() {

        const viewStyles = [styles.splash, { backgroundColor: 'red' }];

        return (
            <View style={viewStyles}>
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 150,
                        width: 150,
                    }}
                    source={require('../assets/pictures/logo.jpg')}
                />
                <Text style={styles.textStyles}>
                    Dia-Beat-This!
          </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    position: {
        position: 'absolute',
        top: 100,
        bottom: 0,
        left: 0,
        right: 0,
    },
   
})
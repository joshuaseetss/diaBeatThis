import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Firebase } from '../database/Firebase';

export default class EnterName extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
        }
    }

    next() {
        const {firstName, lastName} = this.state;
        Firebase.registrationInfo.displayName = firstName + " " + lastName;
        console.log("testing");
        this.props.navigation.navigate('Email');
    }


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.header2}>
                    Who are you
                </Text>
                <Text style={styles.header}>
                    Your Name
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="First Name"
                        placeholderTextColor="#3F4140"
                        autoCapitalize="none"
                        onChangeText={(firstName) => this.setState({ firstName })} />

                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Last Name"
                        placeholderTextColor="#3F4140"
                        autoCapitalize="none"
                        onChangeText={(lastName) => this.setState({ lastName })} />

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.next()}

                >
                    <Text> Next </Text>
                </TouchableOpacity>
            </View>
        );
    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd700'

    },
    header: {
        fontSize: 40,
        fontWeight: '300',
        bottom: 20,
        marginTop: 70
    },
    header2: {
        fontSize: 30,
        fontWeight: '300',
        bottom: 20,
        marginTop: 70
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    button: {
        backgroundColor: '#ff0000',
        marginTop: 30,
        height: 45,
        justifyContent: 'center',
        marginBottom: 20,
        width: 250,
        alignItems: 'center',
        paddingLeft: 20
    },
})
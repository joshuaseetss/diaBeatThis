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

export default class Password extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
       
        }
    }

    async next() {
        const{email} = Firebase.registrationInfo;
        const{displayName} = Firebase.registrationInfo;
        try{

            await Firebase.auth.createUserWithEmailAndPassword(email, this.state.password);
            this.props.navigation.navigate('Home');
            Firebase.writeUserData(email, displayName);

        } catch (e) {

            alert(e + " Error creating user: The email is already taken or it is an invalid email");
            
        }

    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.header2}>
                    Stay safe
                </Text>
                <Text style={styles.header}>
                    Your Password
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="#3F4140"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })} />

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.next()}

                >
                    <Text> Create Account </Text>
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
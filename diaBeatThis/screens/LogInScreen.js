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
import * as firebase from 'firebase';
import { db } from '../services/db';

class LogInScreen extends Component {

    componentWillMount() {
        // const firebaseConfig = {
        //     apiKey: "AIzaSyA0Du6Emw6ZuN9RTJkhk2Mvc1-6f0Dh-zg",
        //     authDomain: "diabeatthis-ead81.firebaseapp.com",
        //     databaseURL: "https://diabeatthis-ead81.firebaseio.com",
        //     projectId: "diabeatthis-ead81",
        //     storageBucket: "diabeatthis-ead81.appspot.com",
        //     messagingSenderId: "122494668373",
        //     appId: "1:122494668373:web:9ec6702aab417769"
        // };
        // // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);
        <db />
    }

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            email: '',
            password: '',
        }
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {

            this.setState({
                isLoading: false
            });
        }
    }

    SignUp = (email, password) => {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    console.log(user);
                });
        } catch (error) {
            console.log(error.toString(error));
            alert("Error creating user: The email is already taken or it is an invalid email");
        }
    };

    Login = (email, password) => {
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res.user.email);
                });
            this.props.navigation.navigate('Loading');
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    render() {

        if (this.state.isLoading) {
            return <SplashScreen />;
        }


        return (
            <View style={styles.container}>
                <View style={styles.position}>
                    <Image
                        style={{
                            alignSelf: 'center',
                            height: 200,
                            width: 200,
                        }}
                        source={require('../assets/pictures/logo.jpg')}
                    />
                </View>
                <Text style={styles.header}>  Log in </Text>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <Text> Forgot your password? </Text>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.Login(this.state.email, this.state.password)}

                >
                    <Text> Sign In </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.SignUp(this.state.email, this.state.password)}

                >
                    <Text> Sign Up </Text>
                </TouchableOpacity>

        


            </View>


        )
    }

}
class SplashScreen extends React.Component {


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


export default LogInScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd700'

    },
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
    header: {
        fontSize: 40,
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
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ff0000',
        padding: 10
    },
})
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    Dimensions,
    ScrollView
} from 'react-native';
import { Firebase } from '../database/Firebase';
import { StackActions, NavigationActions } from 'react-navigation';


const TabHeader = () => (
    <View style={styles.tabheader}>
        <Text style={styles.tabtitle}> Profile </Text>
    </View>
)
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })],
  });

class ProfileScreen extends Component {

    static navigationOptions = {
        header: null
    }


    logout() {
        Firebase.auth.signOut();
        alert('You have logged out');
        this.props.navigation.dispatch(resetAction);
    }

    render() {
            return (
                <ScrollView>
                    <TabHeader />
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.innercontainer}>
                        <Text style={styles.name}>
                            JOHN DOE
                    </Text>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne a
                    </Text>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                <Text>
                                    12 followers
                            </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={styles.button}
                            >
                                <Text>
                                    1 post
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.signOutButton}
                                onPress={() => this.logout()}

                            >
                                <Text>
                                    LogOut
                            </Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.cardImage}
                                source={require('../assets/pictures/MBS.jpg')}
                            />
                            <Text style={styles.cardText}>
                                Hello World!
                    </Text>

                        </TouchableOpacity>

                    </View>


                </ScrollView>


            )

    }

}

const styles = StyleSheet.create({

    container: {
        // marginTop: 50,
        backgroundColor: '#F5FCFF',
    },

    title: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    tabtitle: {
        //marginTop: 15,
        fontSize: 28,
        textShadowColor: "#c5d2ca",
        fontWeight: "bold",
        color: "#f0edf6",
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 1,
        letterSpacing: 8,
        textAlign: "center",
        padding: 4
        //paddingBottom: 30
    },
    tabheader: {
        paddingTop: 35,
        paddingBottom: 5,
        backgroundColor: "#255E5E",
        flexDirection: 'column',

    },
    header: {
        backgroundColor: "#A9CFCF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 200
    },
    innercontainer: {
        marginTop: 50,
    },
    name: {
        fontSize: 35,
        color: "#000000",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding: 10

    },
    button: {
        backgroundColor: '#ff0000',
        marginLeft: 10,
        backgroundColor: '#CFE1E1',
        marginRight: 10
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            width: 3,
            height: 3,
        }
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    cardText: {
        padding: 10,
        fontSize: 16
    },
    signOutButton: {
        alignItems: 'center',
        backgroundColor: '#ff0000',
        padding: 10,
        marginTop: 8
    },



})

export default ProfileScreen;
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabHeader = () => (
    <View style={styles.tabheader}>
        <Text style={styles.tabtitle}> ENTER DATA </Text>
    </View>
)

class EnterDataScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <TabHeader />


                <View style={styles.innercontainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Camera')}
                        style={styles.cameraButton}
                    >
                        <Text>
                            Camera
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('ManualEntry')}
                        style={styles.enterButton}
                    >
                        <Text>
                            Manual Entry
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>


        )
    }

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F5FCFF',


    },
    innercontainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
        color: "#f60c0d",
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
        backgroundColor: "#f69b31"
    },

    cameraButton: {
        backgroundColor: '#ff0000',
        marginTop: 30,
        height: 45,
        justifyContent: 'center',
        marginBottom: 20,
        width: 250,
        alignItems: 'center',
        borderRadius: 30,
        paddingLeft: 20
    },
    enterButton: {

        backgroundColor: '#841584',
        marginTop: 30,
        height: 45,
        justifyContent: 'center',
        marginBottom: 20,
        width: 250,
        alignItems: 'center',
        borderRadius: 30,
        paddingLeft: 20
    },


})


export default EnterDataScreen;
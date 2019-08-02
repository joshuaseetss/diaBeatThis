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


const TabHeader = () => (
    <View style={styles.tabheader}>
        <Text style={styles.tabtitle}> ADD </Text>
    </View>
)

class Enter extends Component {

    state = {
        glucoseLevel: '',
        food: '',
        comments: '',
    }

    handleGlucose = (text) => {
        this.setState({ glucoseLevel: text })
    }

    handleFood = (text) => {
        this.setState({ food: text })
    }

    handleComments = (text) => {
        this.setState({ comments: text })
    }


    render() {
        return (
            <View style={styles.container}>
                <TabHeader />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="112 (mg/dL)"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleGlucose} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Food"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleFood} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Comments"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleComments} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Poster </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('EnterData')}
                    >
                    <Text style={styles.submitButtonText}> Back </Text>
                </TouchableOpacity>
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
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },

    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     }


})


export default Enter;
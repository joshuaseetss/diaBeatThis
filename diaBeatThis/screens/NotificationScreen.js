import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions
} from 'react-native';
import List from './List';


 const TabHeader = () => (
    <View style={styles.tabheader}>
      <Text style={styles.tabtitle}> Notifications </Text>
    </View>
  )
class NotificationScreen extends Component {

    

    render() {
        return (
            <View style={styles.container}>
                <TabHeader /> 
                <List />
            </View>


        )
    }


}

const styles = StyleSheet.create({

    container: {
        // marginTop: 50, 
        backgroundColor: '#F5FCFF',
        flex:1
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
        color: "#615af6",
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
        backgroundColor: "#67baf6"
    },
    


})


export default NotificationScreen;
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
  


const TabHeader = () => (
    <View style={styles.tabheader}>
      <Text style={styles.tabtitle}> HOME </Text>
    </View>
  )

class Home extends Component {

    state = {
        items: []
    }

    

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TabHeader/> 

                <TouchableOpacity style={styles.card}> 
                    <Image style={styles.cardImage} 
                   source={require('../assets/pictures/MBS.jpg')}
                    />
                    <Text style={styles.cardText}> 
                        Ipsum Llodium
                    </Text> 

                </TouchableOpacity>
               
                <TouchableOpacity style={styles.card}> 
                    <Image style={styles.cardImage} 
                   source={require('../assets/pictures/MBS.jpg')}
                    />
                    <Text style={styles.cardText}> 
                        Ipsum Llodium
                    </Text> 

                </TouchableOpacity>
                <TouchableOpacity style={styles.card}> 
                    <Image style={styles.cardImage} 
                   source={require('../assets/pictures/MBS.jpg')}
                    />
                    <Text style={styles.cardText}> 
                        Ipsum Llodium
                    </Text> 

                </TouchableOpacity>
                <TouchableOpacity style={styles.card}> 
                    <Image style={styles.cardImage} 
                   source={require('../assets/pictures/MBS.jpg')}
                    />
                    <Text style={styles.cardText}> 
                        Ipsum Llodium
                    </Text> 

                </TouchableOpacity>

            </ScrollView> 


        )
    }

    

}

const styles = StyleSheet.create({
    
    container : {
       // marginTop: 0,
        backgroundColor: '#F5FCFF',
    },
    title : {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        marginBottom:10,
        marginLeft:'2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity:0.2,
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
        backgroundColor: "#3BAD87"
    },
        
})    


export default Home;

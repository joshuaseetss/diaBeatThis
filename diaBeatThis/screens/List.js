import React, { Component } from 'react'
import { Text, 
         View, 
         TouchableOpacity, 
         StyleSheet,
        Image } from 'react-native'

class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'Ben',
                image: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_oc=AQlbbjtYVsvk5xW1BIYt-jJT98hy9h9IdrgGtpVeNmJ9ABvDUcjoFfLjiG--9RI3HRg&_nc_ht=scontent-sin6-2.xx&oh=580bd012aa1023da5257f211fd6d4fc9&oe=5DE21BE9',
                message: ' Just commented on your post!'
            },
            {
                id: 1,
                name: 'Susan',
                image: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_oc=AQlbbjtYVsvk5xW1BIYt-jJT98hy9h9IdrgGtpVeNmJ9ABvDUcjoFfLjiG--9RI3HRg&_nc_ht=scontent-sin6-2.xx&oh=580bd012aa1023da5257f211fd6d4fc9&oe=5DE21BE9',
                message: ' Added you as a friend!'
            },
            {
                id: 2,
                name: 'Robert',
                image: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_oc=AQlbbjtYVsvk5xW1BIYt-jJT98hy9h9IdrgGtpVeNmJ9ABvDUcjoFfLjiG--9RI3HRg&_nc_ht=scontent-sin6-2.xx&oh=580bd012aa1023da5257f211fd6d4fc9&oe=5DE21BE9',
                message: ' Liked your post!'
            },
            {
                id: 3,
                name: 'Mary',
                image: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_oc=AQlbbjtYVsvk5xW1BIYt-jJT98hy9h9IdrgGtpVeNmJ9ABvDUcjoFfLjiG--9RI3HRg&_nc_ht=scontent-sin6-2.xx&oh=580bd012aa1023da5257f211fd6d4fc9&oe=5DE21BE9',
                message: ' Added you as a friend!'
            }
        ]
    }
    alertItemName = (item) => {
        alert(item.name)
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity 
                            key={item.id}
                            style={styles.innercontainer}
                            onPress={() => this.alertItemName(item)}>
                            <Image
                            style={styles.listImage} 
                            source={require('../assets/pictures/MBS.jpg')}
                            />
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                            <Text style={styles.text}> 
                                {item.message}
                            </Text>
                           

                    
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default List

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    innercontainer: {
        padding: 10,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
        flexDirection:'row',
        height: '10%',
        borderBottomWidth:1
    },
    text: {
        color: '#4f603c'
    },
    tabtitle: {
        //marginTop: 15,
        fontSize: 28,
        textShadowColor: "#c5d2ca",
        fontWeight: "bold",
        color: "#d7c04d",
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
    listImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
})
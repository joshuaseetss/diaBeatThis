import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation'; 
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';  

import Home from './Home'
import EnterData from './EnterDataScreen';


const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: Home,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
                    
            }  
        },  
        EnterData: { screen: EnterData,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  
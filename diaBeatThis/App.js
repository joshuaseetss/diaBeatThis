/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Firebase } from './database/Firebase';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LogInScreen from './screens/LogInScreen';
import LoadingScreen from './screens/Loading';
import Home from './screens/Home';
import EnterData from './screens/EnterDataScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import CameraScreen from './screens/CameraScreen';
import ManualEntry from './screens/ManualEntry';
import Enter from './screens/Enter';
import EnterName from './screens/EnterName';
import Email from './screens/Email';
import Password from './screens/Password';
import SplashScreen from './screens/SplashScreen';

const bottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>),
      }
    },
    EnterData: {
      screen: EnterData,
      navigationOptions: {
        tabBarLabel: 'Enter Data',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-add'} />
          </View>),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      }
    },
    Notifications: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-heart'} />
          </View>),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' },
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
          </View>),
        activeColor: '#f0edf6',
        inactiveColor: '#133130',
        barStyle: { backgroundColor: '#255E5E' }

      }
    },


  },

  {
    initialRouteName: "Home",
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
  },
)

const register = createStackNavigator({
  EnterName: { screen: EnterName },
  Email: { screen: Email },
  Password: { screen: Password },

})
const AppStackNavigator = createStackNavigator({

  Login: { screen: LogInScreen },
  Register: { screen: register },
  Loading: { screen: LoadingScreen },
  Inside: { screen: bottomNavigator },
  Camera: { screen: CameraScreen },
  ManualEntry: { screen: ManualEntry },
  Enter: { screen: Enter }


}, {
    defaultNavigationOptions: {
      header: null
    },
  }

);

const AppContainer = createAppContainer(AppStackNavigator);



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authStatusReported: false,
      isUserAuthenticated: false,

    }
  }
  componentWillMount() {
    Firebase.init();
    Firebase.auth.onAuthStateChanged(user => {
       this.setState({
        authStatusReported: true,
        isUserAuthenticated: !!user,
      })
    });
  }

  render() {

    return (
      // (this.authStatusReported) ?
      //   (
      //     this.isUserAuthenticated ? <Home /> : <AppContainer />
      //   )

      //   : <SplashScreen />
      <AppContainer />
    );

  }


}


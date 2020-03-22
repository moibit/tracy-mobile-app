
import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from "react-navigation-drawer";



import LocationScreen from "./component/getlocation/userlocation";
import SignUpScreen from "./component/signup/signup";
import SymptomScreen from "./component/symptom/symptoms";
import AboutScreen from "./component/aboutus/about";
import HealthScreen from "./component/healthstatus/health";
import LoginScreen from "./component/login/login";
import QRScreen from "./component/qrcode/qr";

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={{ uri: "https://aboutreact.com/wp-content/uploads/2018/07/drawer.png" }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const AccountStack = createStackNavigator({
  Signup: {
    screen: SignUpScreen,
  },
  Login: LoginScreen,
}, { headerMode: 'none' });


const HomeStack = createStackNavigator(
  {
    Home: { screen: LocationScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: '#112b4e',

      },
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      title: "Tracy",
      headerTitleStyle: {
        fontSize: 14,
      },
    }),

  }
);
const SymptomStack = createStackNavigator(
  {
    Symptom: { screen: SymptomScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: '#112b4e',

      },
      title: "Tracy",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontSize: 14,
      },
    }),

  }
);


const AboutStack = createStackNavigator(
  {
    About: { screen: AboutScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: '#112b4e',

      },
      title: "Tracy",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontSize: 14,
        alignSelf: "center"
      },
    }),

  }
);

const HealthStack = createStackNavigator(
  {
    Health: { screen: HealthScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: '#112b4e',

      },
      title: "Tracy",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontSize: 14,
        alignSelf: "center"
      },
    }),

  }
);

const QrStack = createStackNavigator(
  {
    Qr: { screen: QRScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: '#112b4e',

      },
      title: "Tracy",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontSize: 14,
        alignSelf: "center"
      },
    }),

  }
);



const AppStack = createDrawerNavigator(
  {
    // Account: AccountStack,
    Home: { screen: HomeStack },

    Symptom: {
      screen: SymptomStack, navigationOptions: ({ navigation }) => ({
        title: "Check Symptoms"
      })
    },
    About: { screen: AboutStack },
    Health: {
      screen: HealthStack, navigationOptions: ({ navigation }) => ({
        title: "Update Health Status"
      })
    },
    Qr: { screen: QrStack },

  },
  {
    initialRouteName: 'Home',
    // initialRouteName: 'Symptom',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }





);

const AppNavigator = createSwitchNavigator(
  {
    Account: AccountStack,
    App: AppStack,
    Auth: {
      //  screen: QRScreen,
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Auth',
    //initialRouteName: 'App',
  },
);
export default createAppContainer(AppNavigator);

console.disableYellowBox = true;

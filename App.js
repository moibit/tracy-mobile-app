
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon, Button } from 'react-native-elements';


import { createAppContainer, createSwitchNavigator, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";



import LocationScreen from "./component/getlocation/userlocation";
import SignUpScreen from "./component/signup/signup";
import SymptomScreen from "./component/symptom/symptoms";
import AboutScreen from "./component/aboutus/about";
import LoginScreen from "./component/login/login";
import QRScreen from "./component/qrcode/qr";
import SignupOTPScreen from "./component/signup/sendotp";
import EmergencyScreen from "./component/signup/emergency";
import EmergencyOTPScreen from "./component/signup/emergencyotp";
import LoginOTPScreen from "./component/login/loginotp";

const windowWidth = Dimensions.get('window').width;



class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>

          <Icon
            name='md-menu'
            type='ionicon'
            color='#193F78'
            iconStyle={{ marginLeft: 12 }}
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
  SignUpOtp: SignupOTPScreen,
  Emergency: EmergencyScreen,
  EmergencyOTP: EmergencyOTPScreen,
  LoginOtp: LoginOTPScreen

}, { headerMode: 'none' });


const HomeStack = createStackNavigator(
  {
    Home: { screen: LocationScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: "#D6EBFE",
        borderBottomWidth: 0,
        elevation: 0
      },
      // headerTitle: (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Image resizeMode="contain" source={require("./assets/logo.png")} style={{ width: 100, height: 100, alignSelf: "center" }} /></View>),
      headerTitle: (<Image resizeMode="contain" source={require("./assets/logo.png")} style={{ width: 100, height: 100, alignSelf: "center", marginLeft: windowWidth / 5 }} />),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerRight: (
        <View style={{ flexDirection: 'row', marginRight: 12 }}>
          <Icon onPress={() => navigation.openDrawer()} name='md-notifications-outline'
            type='ionicon' color="#193F78" /></View>
      )
    }),

  },

);
const SymptomStack = createStackNavigator(
  {
    Symptoms: { screen: SymptomScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: "#D6EBFE",
        borderBottomWidth: 0,
        elevation: 0

      },
      headerTitle: (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Image resizeMode="contain" source={require("./assets/logo.png")} style={{ width: 100, height: 100, alignSelf: "center", marginLeft: windowWidth / 5 }} /></View>),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerRight: (
        <View style={{ flexDirection: 'row', marginRight: 12 }}>
          <Icon onPress={() => navigation.openDrawer()} name='md-notifications-outline'
            type='ionicon' color="#193F78" /></View>
      )
    }),

  },
);




const AboutStack = createStackNavigator(
  {
    About: { screen: AboutScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: "#D6EBFE",
        borderBottomWidth: 0,
        elevation: 0

      },
      headerTitle: (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Image resizeMode="contain" source={require("./assets/logo.png")} style={{ width: 100, height: 100, alignSelf: "center", marginLeft: windowWidth / 5 }} /></View>),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerRight: (
        <View style={{ flexDirection: 'row', marginRight: 12 }}>
          <Icon onPress={() => navigation.openDrawer()} name='md-notifications-outline'
            type='ionicon' color="#193F78" /></View>
      )
    }),

  },
);



const QrStack = createStackNavigator(
  {
    Qr: { screen: QRScreen, params: { index: 1 } },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: "#D6EBFE",
        borderBottomWidth: 0,
        elevation: 0

      },
      headerTitle: (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Image resizeMode="contain" source={require("./assets/logo.png")} style={{ width: 100, height: 100, alignSelf: "center", marginLeft: windowWidth / 5 }} /></View>),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerRight: (
        <View style={{ flexDirection: 'row', marginRight: 12 }}>
          <Icon onPress={() => navigation.openDrawer()} name='md-notifications-outline'
            type='ionicon' color="#193F78" /></View>
      )
    }),

  },
);


const QrStack2 = createStackNavigator(
  {
    Qr1: { screen: QRScreen, params: { index: 0 } },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerStyle: {
        backgroundColor: "#D6EBFE",
        borderBottomWidth: 0,
        elevation: 0

      },
      headerTitle: (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Image resizeMode="contain" source={require("./assets/logo.png")} style={{ width: 100, height: 100, alignSelf: "center", marginLeft: windowWidth / 5 }} /></View>),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerTintColor: '#FFFFFF',
      headerRight: (
        <View style={{ flexDirection: 'row', marginRight: 12 }}>
          <Icon onPress={() => navigation.openDrawer()} name='md-notifications-outline'
            type='ionicon' color="#193F78" /></View>
      )
    }),

  },
);



const AppStack = createDrawerNavigator(
  {
    // Account: AccountStack,
    Home: { screen: HomeStack },
    Qr: {
      screen: QrStack, navigationOptions: ({ navigation }) => ({
        title: "Share QR Code",
      })
    },
    Qr1: {
      screen: QrStack2, navigationOptions: ({ navigation }) => ({
        title: "Scan QR Code",
      })
    },
    Symptom: {
      screen: SymptomStack, navigationOptions: ({ navigation }) => ({
        title: "Report my health",
      })
    },
    About: {
      screen: AboutStack, navigationOptions: ({ navigation }) => ({
        title: "About the app",
      })
    },


  },


  {
    initialRouteName: 'Home',
    drawerWidth: 270,
    drawerBackgroundColor: "#193F78",
    contentComponent: (props) => (
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ height: 100, marginLeft: 25 }}>
          <Image source={require("./assets/logo_green.png")} style={{ width: 100, height: 100 }} resizeMode="contain" />
        </View>
        <ScrollView>
          <View >

            <DrawerItems
              activeTintColor="#2ED88E"
              inactiveTintColor="#fff"
              itemStyle={{ borderBottomColor: "grey", borderWidth: 0.2, marginLeft: 20, marginRight: 20, borderRightColor: "#193F78", borderLeftColor: "#193F78", borderTopColor: "#193F78" }}
              {...props} />
          </View>
        </ScrollView>
        <View style={{ height: 100, marginLeft: 25 }}>
          <Button title="LOGOUT"
            icon={
              <Icon
                name="md-exit"
                size={15}
                color="white"
                type='ionicon'
              />
            }
            type="outline"
            iconRight
            buttonStyle={{ width: 100, borderColor: "#fcfcfc", borderWidth: 1 }}
            titleStyle={{ color: "#fcfcfc", marginRight: 8, fontSize: 12 }}
          />
        </View>
      </SafeAreaView>
    )
  }

);

const AppNavigator = createSwitchNavigator(
  {
    Account: AccountStack,
    App: AppStack,
    // App: QrStack,
    Auth: {
      // screen: SignUpScreen,
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Auth',
    // initialRouteName: 'App',
  },
);
export default createAppContainer(AppNavigator);

console.disableYellowBox = true;

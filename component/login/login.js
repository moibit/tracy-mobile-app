import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "../style";
import { Icon } from 'react-native-elements';
import { CreateDB, GetDBData } from '../common/db';
// import {sendTracyOTP} from '../../moi-id/integrationUtils.js';
import SplashScreen from './splashScreen';
import { AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
import {CheckForAppUpdate} from '../promptUpgrade';
// const Moi_ID = require('../../moi-id');
// const moi_id = new Moi_ID();
import RemotePushController from '../services/pushNotification';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            isLoggedIn: false,
            err: false,
            checkingForSession : true,
            unableToLogin : false,
            processingWithoutFail : true
        }
    }

      async createNotificationListeners() {
        /*
        * Triggered when a particular notification has been received in foreground
        * */
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            this.showAlert(title, body);
        });
      
        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        });
      
        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
          //process data message
          console.log(JSON.stringify(message));
        });
      }
      
      showAlert(title, body) {
        Alert.alert(
          title, body,
          [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
      }

      componentWillUnmount() {
        // this.notificationListener();
       //  this.notificationOpenedListener();
      }
    async componentDidMount() {
        // this.checkPermission();
      
        this.createNotificationListeners(); //add this line

        try {
            await CreateDB();
            let db_res;
            db_res = await GetDBData();
            if(db_res == undefined) {
                this.setState({checkingForSession : false});
            }else {
                if (db_res.status == 1) {
                    // try {
                        // const loginR = await moi_id.unlock(db_res.mobile, db_res.mobile);
                        // if (loginR) {
                            this.props.navigation.navigate("Home");
                        // }else {
                        //     this.setState({notAnUser : true,checkingForSession:false});
                        //     setTimeout(() => {
                        //         this.setState({ notAnUser: false })
                        //     }, 3000)
                        // }
                    // }catch(e) {
                    //     this.setState({checkingForSession : false,unableToLogin : true});
                    //     setTimeout(() => {
                    //         this.setState({ unableToLogin: false })
                    //     }, 3000)
                    // }
                }else {
                    this.setState({checkingForSession : false});
                }
            }
        }catch(e) {
            this.setState({processingWithoutFail : false})
        }
    }

    sendLoginOtp = async () => {
        if (this.state.mobile == "") {
            this.setState({ err: true });
        }
        else {
            this.props.navigation.navigate('LoginOtp', { mobile: this.state.mobile , otpToBeVerifiedWith : await sendTracyOTP(this.state.mobile)});
        }
    }


    render() {
        return (
           <View>
          <CheckForAppUpdate/>
            {this.state.checkingForSession ? 
            <SplashScreen processingWithoutFail={this.state.processingWithoutFail} /> : 
            <ScrollView style={{ backgroundColor: "#193F78",height:'100%' }}>

                <View style={{ flex: 1, margin: 20, marginTop: 0 }}>
                    <View>
                        <Image source={require("../../assets/logo_green.png")} resizeMode="contain" style={{ width: 70, alignSelf: "flex-end", marginTop: -30 }} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 30, color: "#fff" }}>Welcome back!</Text>
                        <Text style={{ fontSize: 18, color: "#fff" }}>Login to Tracy</Text>

                        <View style={styles.container}>

                            <View style={[styles.SectionStyle, { marginBottom: 30 }]}>

                                <TextInput
                                    keyboardType={'numeric'}
                                    style={{ flex: 1, color: "#fff" }}
                                    placeholderTextColor={this.state.err ? "brown" : "rgba(255, 255, 255, 0.5)"}
                                    placeholder="Mobile number"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ mobile: e, err: false })}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'pink',fontSize:14}}>{this.state.notAnUser ? 'Authentication Failed! Please register to tracy' : ''}</Text>
                            <Text style={{color:'pink',fontSize:14}}>{this.state.unableToLogin ? 'Unable to login.Please try after sometime':''}</Text>
                        </View>
                        
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={{
                                backgroundColor: "#fff",
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 20,
                                borderRadius: 5
                            }} onPress={() => this.sendLoginOtp()}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: '#193F78',
                                    fontWeight: "bold"
                                }}>NEXT</Text>
                                <Icon
                                    name='md-arrow-forward'
                                    type='ionicon'
                                    color='#193F78'
                                    iconStyle={{ marginLeft: 5, fontWeight: "bold" }}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={{ textAlign: 'center', color: appColor.color, fontSize: 16 }}>Forgot Password?</Text> */}
                    </View>
                </View>
                <Text style={{ textAlign: 'center', color: "#fff", fontSize: 16 }}>New to Tracy?<Text style={{ color: "#fff", textDecorationLine: "underline" }} onPress={() => this.props.navigation.navigate("Signup")}> Join us now</Text></Text>

            </ScrollView>
            }
              <RemotePushController style={{height:0}}/>
            </View> 
            // </KeyboardAvoidingView>
        );
    }
}



export default Login;
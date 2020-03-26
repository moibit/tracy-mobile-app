import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity,Image , ActivityIndicator} from 'react-native';
import styles from "../style";
import { InsertData, CreateDB } from '../common/db';

/* Commented code shall be only during integration with moi_id and moibit so please don't remove any piece of code that was commented */
// import {verifyTheOTP} from '../../moi-id/integrationUtils.js';
// const Moi_ID = require('../../moi-id');
// const moi_id = new Moi_ID();



class LoginOtp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            err: false,
            mobile: "",
            loggingIn : false
        }
    }

    async componentDidMount() {
        await CreateDB();
        this.setState({ mobile: this.props.navigation.state.params.mobile });
    }

    handleSubmit = async () => {
        if (this.state.otp == "") {
            this.setState({ err: true })
        }
        else {
            // try {
                // this.setState({loggingIn : true});
                // if (verifyTheOTP(this.props.navigation.state.params.otpToBeVerifiedWith,this.state.otp)) {
                //     try {
                //         const loginR = await moi_id.unlock(this.state.mobile,this.state.mobile);
                //         if (loginR) {
                //             let db_res = await InsertData(this.state.mobile, 1);
                //             if (db_res[0]['rowsAffected'] == 1) {
                //                 this.setState({loggingIn : false});
                                this.props.navigation.navigate("Home")
                            // }
            //             }else {
            //                 this.setState({notAnUser : true,loggingIn:false});
            //                 setTimeout(() => {
            //                     this.setState({ notAnUser: false })
            //                 }, 3000)
            //             }
            //         }catch(e) {
            //             console.log(e);
            //             this.setState({loggingIn : false,unableToLogin : true});
            //             setTimeout(() => {
            //                 this.setState({ unableToLogin: false })
            //             }, 3000)
            //         }
            //     }else {
            //         this.setState({loggingIn : false,invalidOtp : true});
            //         setTimeout(() => {
            //             this.setState({ invalidOtp: false })
            //         }, 3000)
            //     }
            // }
            // catch (err) {
            //     console.log(err)
            // }
        }
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "#193F78" }}>

                <View style={{ flex: 1, margin:20,marginTop:0 }}>


                    <View>
                        <Image source={require("../../assets/logo_green.png")} resizeMode="contain" style={{ width: 70, alignSelf: "flex-end", marginTop: -30 }} />
                    </View>

                    <View style={{ marginTop: 0 }}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>Finish login</Text>
                        <Text style={{ fontSize: 16, color: "#fff", marginTop: 8 }}>Enter the OTP sent to your phone to login</Text>

                        <View style={styles.container}>

                            <View style={{

                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: this.state.err ? "brown" : '#fff',
                                // height: 40,
                                // borderRadius: 5,
                                marginBottom: 40,
                            }}>

                                <TextInput
                                    keyboardType={'numeric'}
                                    style={{ flex: 1, color: "#fff", textAlign: "center", letterSpacing: 30, fontSize: 36 }}
                                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                    // placeholder="Mobile number"
                                    underlineColorAndroid="transparent"
                                    onChangeText={e => this.setState({ otp: e, err: false })}

                                />
                                {/* <Icon name="mobile" size={30} style={styles.ImageStyle} /> */}
                            </View>

                        </View>
                        <View>
                            <Text style={{color:'pink',fontSize:14}}>{this.state.invalidOtp ? 'Authentication Failed! Make sure you have entered correct OTP' : ''}</Text>
                            <Text style={{color:'pink',fontSize:14}}>{this.state.notAnUser ? 'Authentication Failed! Please register to tracy' : ''}</Text>
                            <Text style={{color:'pink',fontSize:14}}>{this.state.unableToLogin ? 'Unable to login.Please try after sometime':''}</Text>
                        </View>
                        <Text style={{ textAlign: 'center', color: "#fff", fontSize: 16, textDecorationLine: "underline" }}>Resend OTP</Text>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={{
                                backgroundColor: "#fff",
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 20,
                                borderRadius: 5
                            }} onPress={this.handleSubmit}>
                                {this.state.loggingIn ? <ActivityIndicator size="large" color="#193F78" /> : null}
                                {!this.state.loggingIn ? <Text style={{
                                    fontSize: 16,
                                    color: '#193F78',
                                    fontWeight: "bold"
                                }}>LOG IN</Text> : null}
                                

                            </TouchableOpacity>
                        </View>
                        {/* <Text style={{ textAlign: 'center', color: appColor.color, fontSize: 16 }}>Forgot Password?</Text> */}
                    </View>
                </View>
            </ScrollView>
        );
    }
}



export default LoginOtp;
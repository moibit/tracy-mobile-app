import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from "../style";
import { InsertData } from '../common/db';
/* Below piece of code shall be only used during integration */
import {sendTracyOTP,verifyTheOTP,sendSecretSause} from '../../moi-id/integrationUtils.js'
const Moi_ID = require('../../moi-id');
const moi_id = new Moi_ID();



class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            otperr: false,
            mobile: "",
            loading: false,
            exists: false,
            otpToBeVerifiedWith : '',
            somethingWrong : ''
        }
    }

    async componentDidMount() {
        this.setState({ mobile: this.props.navigation.state.params.mobile });
        let mobile = this.props.navigation.state.params.mobile;
        /* Below piece of code shall be only used during integration */
        this.setState({otpToBeVerifiedWith : await sendTracyOTP(mobile)});
    }


    handleSubmit = async () => {
        if (this.state.otp == "") {
            this.setState({ otperr: true })
        }
        else {
            this.setState({ loading: true });
            try {
                /* Below piece of code shall be only used during integration */
                if (verifyTheOTP(this.state.otpToBeVerifiedWith,this.state.otp)) {
                    const signupR = await moi_id.create(this.state.mobile, this.state.mobile);
                    if (signupR) {
                        await sendSecretSause(moi_id.getSeedSause(),this.state.mobile);
                        let db_res = await InsertData(this.state.mobile, 1);
                        if (db_res[0]['rowsAffected'] == 1) {
                            // this.setState({ loading: false });
                            this.props.navigation.navigate("Emergency")
                        }
                    } else {
                        // console.log('Already an user')
                        this.setState({ exists: true, loading: false });
                        setTimeout(() => {
                            this.setState({ exists: false })
                        }, 3000)
                    }
                }else {
                    this.setState({loading : false,invalidOtp : true});
                    setTimeout(() => {
                        this.setState({ invalidOtp: false })
                    }, 3000)
                }
            }
            catch (err) {
                this.setState({ loading: false, somethingWrong:err.toString() });

            }

        }
    }

    render() {
        return (
            // <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-200}>
            <React.Fragment>
            <ScrollView style={{ backgroundColor: "#193F78" }}>

                <View style={{ flex: 1, margin: 20, marginTop: 0 }}>


                    <View>
                        <Image source={require("../../assets/logo_green.png")} resizeMode="contain" style={{ width: 70, alignSelf: "flex-end", marginTop: -30 }} />
                    </View>

                    <View style={{ marginTop: -30 }}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>Almost done!</Text>
                        <Text style={{ fontSize: 16, color: "#fff", marginTop: 8 }}>Enter the OTP sent to your mobile phone to create your account</Text>

                        <View style={styles.container}>

                            <View style={{

                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: this.state.otperr ? "brown" : '#fff',
                                // height: 40,
                                // borderRadius: 5,
                                marginBottom: 40,
                            }}>

                                <TextInput
                                    keyboardType={'numeric'}
                                    style={{ flex: 1, color: "#fff", textAlign: "center", letterSpacing: 30, fontSize: 36 }}
                                    placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
                                    // placeholder="Mobile number"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ otp: e, otperr: false })}

                                />
                                {/* <Icon name="mobile" size={30} style={styles.ImageStyle} /> */}
                            </View>



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
                            }} onPress={this.handleSubmit}
                                disabled={this.state.loading}
                            >
                                {this.state.loading ? <ActivityIndicator size="large" color="#193F78" /> : null}
                                {!this.state.loading ? <Text style={{
                                    fontSize: 16,
                                    color: '#193F78',
                                    fontWeight: "bold"
                                }}>SIGN UP</Text> : null}

                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', color: "#f2f2f2", fontSize: 12 }}>{this.state.somethingWrong}</Text>
                        {this.state.loading ? <Text style={{ textAlign: 'center', color: "#f2f2f2", fontSize: 12 }}>Your wallet for digital companion to fight Covid-19 by contact tracing and without compromising privacy is being generated...</Text> : null}
                        {this.state.exists ? <Text style={{ textAlign: 'center', color: "brown", fontSize: 16 }}>Seems like you already have an account in tracy.Try Logging in</Text> : null}
                        {this.state.invalidOtp ? <Text style={{ textAlign: 'center', color: "brown", fontSize: 16 }}>Authentication Failed! Make sure you have entered correct OTP</Text> : null}
                    </View>
                </View>
            </ScrollView>
             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "#193F78" }}>
                <View style={{position: 'absolute', bottom: 30}}>
                    <Text style={{color:"#f2f2f2"}}>Powered by <Text style={{color:'#d5a489',fontSize:20}}>Mói_ID.</Text> Built on <Text style={{color:'#79cedc',fontSize:20}}>MóiBit</Text></Text>
                </View>
            </View>
            </React.Fragment>
            // </KeyboardAvoidingView>
        );
    }
}



export default SignUp;
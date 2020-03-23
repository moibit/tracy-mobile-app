import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from "../style";
import { sendTracyOTP } from "../common/apicall";
import axios from 'axios';
import { InsertData } from '../common/db';



class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            otperr: false,
            mobile: ""
        }
    }

    async componentDidMount() {
        this.setState({ mobile: this.props.navigation.state.params.mobile });
        let mobile = this.props.navigation.state.params.mobile;
        await sendTracyOTP(mobile);
    }


    handleSubmit = async () => {
        if (this.state.otp == "") {
            this.setState({ otperr: true })
        }
        else {
            let parameters = {
                country_code: '91',
                targetNumber: this.state.mobile,
                oTp: this.state.otp
            }

            try {
                let res = await axios({
                    url: 'https://api.msg91.com/api/v5/otp/verify?mobile=' + parameters.country_code + '' + parameters.targetNumber + '&otp=' + parameters.oTp + '&authkey=300655AwBn6Fz74Ie5db184a4',
                    method: 'POST',
                });
                if (res.data.message == "OTP verified success") {
                    let db_res = await InsertData(this.state.mobile, 1);
                    if (db_res[0]['rowsAffected'] == 1) {
                        this.props.navigation.navigate("Emergency")
                    }
                }
            }
            catch (err) {
                // console.log(err)
            }

        }
    }

    render() {
        return (
            // <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-200}>
            <ScrollView style={{ backgroundColor: "#193F78" }}>

                <View style={{ flex: 1, margin: 20 }}>


                    {/* <Logo /> */}

                    <View style={{ marginTop: '8%' }}>
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
                            }} onPress={this.handleSubmit}>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#193F78',
                                    fontWeight: "bold"
                                }}>SIGN UP</Text>

                            </TouchableOpacity>
                        </View>
                        {/* <Text style={{ textAlign: 'center', color: appColor.color, fontSize: 16 }}>Forgot Password?</Text> */}
                    </View>
                </View>
            </ScrollView>
            // </KeyboardAvoidingView>
        );
    }
}



export default SignUp;
import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from "../style";
import axios from 'axios';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            otpErr: false, mobile: ""
        }
    }
    componentDidMount() {
        this.setState({ mobile: this.props.navigation.state.params.mobile });
    }

    handleSubmit =async () => {
        if (this.state.otp == "") {
            this.setState({ otpErr: true })
        }
        else {
            //  this.props.navigation.navigate("Home")
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

                    this.props.navigation.navigate("Home")

                }
            }
            catch (err) {
                // console.log(err)
            }
        }

    }

    render() {
        return (

            <ScrollView style={{ backgroundColor: "#193F78" }}>

                <View style={{ flex: 1, margin: 20 }}>

                    <View style={{ marginTop: '8%' }}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>Almost done!</Text>
                        <Text style={{ fontSize: 16, color: "#fff", marginTop: 8 }}>Enter the OTP sent to your emergency contact to add them here.</Text>

                        <View style={styles.container}>

                            <View style={{

                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: this.state.otpErr ? "brown" : '#fff',
                                // height: 40,
                                // borderRadius: 5,
                                marginBottom: 30,
                            }}>

                                <TextInput
                                    keyboardType={'numeric'}
                                    style={{ flex: 1, color: "#fff", textAlign: "center", letterSpacing: 30, fontSize: 36 }}
                                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                    // placeholder="Mobile number"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ otp: e, otpErr: false })}

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
                                    fontWeight: "bold",
                                    letterSpacing: 1
                                }}>ADD EMERGENCY CONTACT</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}



export default SignUp;
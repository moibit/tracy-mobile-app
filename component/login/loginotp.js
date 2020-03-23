import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from "../style";


class LoginOtp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            err: false
        }
    }

    handleSubmit = () => {
        if (this.state.otp == "") {
            this.setState({ err: true })
        }
        else {
            this.props.navigation.navigate("Home")
        }

    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "#193F78" }}>

                <View style={{ flex: 1, margin: 20 }}>


                    {/* <Logo /> */}

                    <View style={{ marginTop: '8%' }}>
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
                                }}>LOG IN</Text>

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
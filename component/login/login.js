import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from "../style";
import { Icon } from 'react-native-elements';


const appColor = {
    color: "#947ce8",
}
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            isLoggedIn: false,
            err: false

        }
    }
    componentDidMount() {

    }
    sendLoginOtp = () => {

        if (this.state.mobile == "") {
            this.setState({ err: true });
        }
        else {
            this.props.navigation.navigate("LoginOtp");

        }

    }


    render() {
        return (
            // <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-200}>
            <ScrollView style={{ backgroundColor: "#193F78" }}>

                <View style={{ flex: 1, margin: 20 }}>


                    {/* <Logo /> */}

                    <View style={{ marginTop: '8%' }}>
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
                                {/* <Icon name="mobile" size={30} style={styles.ImageStyle} /> */}
                            </View>




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
                            }} onPress={this.sendLoginOtp}>
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
                <Text style={{ textAlign: 'center', color: "#fff", fontSize: 16 }}>New Here?<Text style={{ color: "#fff", textDecorationLine: "underline" }} onPress={() => this.props.navigation.navigate("Signup")}> Sign up here</Text></Text>

            </ScrollView>
            // </KeyboardAvoidingView>
        );
    }
}



export default Login;
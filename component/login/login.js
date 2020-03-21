import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from "../style";
import Icon from 'react-native-vector-icons/FontAwesome';
const appColor = {
    color: "#947ce8",
}
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailFocus: false,
            passwordFocus: false,
            secureText: true,
            toScroll: false,
            mobile: "",
            otp: ""
        }
    }

    handleRegisterSubmit = () => {
        //() => this.props.navigation.navigate("Home")
        this.props.navigation.navigate("Home");
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-200}>
                <ScrollView >
                    <View style={{ flex: 1 }}>
                        <View style={{ margin: 10, marginTop: '20%', textAlign: 'center' }}>

                            {/* <Logo /> */}

                            <View style={{ marginTop: '8%' }}>

                                <Text style={{ fontSize: 20, textAlign: 'center' }}>Login to Tracy</Text>

                                <View style={styles.container}>

                                    <View style={[styles.SectionStyle, { borderColor: this.state.emailFocus ? appColor.color : '#000' }]}>

                                        <TextInput
                                            keyboardType={'numeric'}
                                            style={{ flex: 1, padding: 10 }}
                                            placeholder="Mobile number"
                                            underlineColorAndroid="transparent"
                                            onFocus={() => { this.setState({ emailFocus: true }) }}
                                            onBlur={() => { this.setState({ emailFocus: false }) }}
                                        />
                                        <Icon name="mobile" size={30} style={styles.ImageStyle} />
                                    </View>

                                    <View style={[styles.SectionStyle, { borderColor: this.state.passwordFocus ? appColor.color : '#000' }]}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            style={{ flex: 1, padding: 10 }}
                                            placeholder="Enter OTP"
                                            secureTextEntry={this.state.secureText}
                                            underlineColorAndroid="transparent"
                                            onFocus={() => { this.setState({ passwordFocus: true }) }}
                                            onBlur={() => { this.setState({ passwordFocus: false }) }}
                                        />
                                        <Icon name="eye" size={20} style={[styles.ImageStyle, { color: !this.state.secureText ? appColor.color : '#000' }]} onPress={() => this.setState({ secureText: !this.state.secureText })} />
                                    </View>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: appColor.color,
                                        height: 40,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: 20,
                                        borderRadius: 5
                                    }} onPress={this.handleRegisterSubmit}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: 'white'
                                        }}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ textAlign: 'center', color: appColor.color, fontSize: 12 }}>Not a member yet?<Text style={{ color: "#000" }} onPress={() => this.props.navigation.navigate("Signup")}> Click here</Text></Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}



export default Login;
import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

const data = [{
    value: 'Spouse',
}, {
    value: 'Father',
}, {
    value: 'Son',
}, {
    value: 'Daughter'
}, {
    value: "Friend"
}
];
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {

            otp: "",
            mobile: ""
        }
    }

    sendOTP = () => {
        this.props.navigation.navigate("EmergencyOTP");
    }

    render() {
        return (
            // <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-200}>
            <ScrollView style={{ backgroundColor: "#193F78" }}>


                <View style={{ flex: 1, margin: 20 }}>


                    {/* <Logo /> */}

                    <View style={{ marginTop: '8%' }}>
                        <Text style={{ fontSize: 30, color: "#fff" }}>Who’s your</Text>
                        <Text style={{ fontSize: 30, color: "#fff" }}>emergency contact?</Text>
                        <Text style={{ fontSize: 14, color: "#fff", marginTop: 16 }}>We’ll send them an OTP which you’ll need to assign them as your emergency contact.</Text>

                        <View style={styles.container}>

                            <View style={[styles.SectionStyle]}>

                                <TextInput

                                    style={{ flex: 1, color: "#fff" }}
                                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                    placeholder="Name"
                                    underlineColorAndroid="transparent"

                                />
                                {/* <Icon name="mobile" size={30} style={styles.ImageStyle} /> */}
                            </View>
                            <View style={{ marginBottom: 20, }}>
                                <Dropdown
                                    label='How are you related?'
                                    data={data}
                                    style={{ flex: 1 }}
                                    baseColor="rgba(255, 255, 255, 0.5)"
                                    labelTextStyle={{ color: "rgba(255, 255, 255, 0.5)" }}
                                />
                                {/* <Icon name="eye" size={20} style={[styles.ImageStyle, { color: !this.state.secureText ? appColor.color : '#000' }]} onPress={() => this.setState({ secureText: !this.state.secureText })} /> */}
                            </View>

                            <View style={[styles.SectionStyle, { borderColor: this.state.passwordFocus ? appColor.color : '#000' }]}>
                                <TextInput
                                    keyboardType={'numeric'}
                                    style={{ flex: 1, color: "#fff" }}
                                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                    placeholder="Mobile"
                                    secureTextEntry={this.state.secureText}
                                    underlineColorAndroid="transparent"
                                />
                                {/* <Icon name="eye" size={20} style={[styles.ImageStyle, { color: !this.state.secureText ? appColor.color : '#000' }]} onPress={() => this.setState({ secureText: !this.state.secureText })} /> */}
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
                            }} onPress={this.sendOTP}>
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


            </ScrollView>
            // </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        height: 40,
    },
    container: {

        marginTop: '10%',
        marginBottom: 40

    },


})



export default SignUp;
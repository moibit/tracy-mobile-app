import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { sendTracyOTP } from "../common/apicall";

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

            mobile: "",
            name: "",
            relative: "",
            mobErr: false,
            nameErr: false,
            relativeErr: false
        }
    }

    sendOTP = async () => {

        if (this.state.name == "") {
            this.setState({ nameErr: true })
        } else if (this.state.relative == "") {
            this.setState({ relativeErr: true })
        }
        else if (this.state.mobile == "") {
            this.setState({ mobErr: true })
        }

        else {

            await sendTracyOTP(this.state.mobile);
            this.props.navigation.navigate("EmergencyOTP", { mobile: this.state.mobile });

        }
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
                                    placeholderTextColor={this.state.nameErr ? "brown" : "rgba(255, 255, 255, 0.5)"}
                                    placeholder="Name"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ name: e, nameErr: false })}
                                />

                            </View>
                            <View style={{ marginBottom: 20, }}>
                                <Dropdown
                                    label='How are you related?'
                                    data={data}
                                    style={{ flex: 1 }}
                                    baseColor={this.state.relativeErr ? "brown" : "rgba(255, 255, 255, 0.5)"}
                                    // labelTextStyle={{ color: "red" }}
                                    // textColor="#fff"
                                    // itemColor="rgba(255, 255, 255, 0.5)"
                                    onChangeText={(e) => this.setState({ relative: e, relativeErr: false })}


                                />

                            </View>

                            <View style={[styles.SectionStyle, { borderColor: this.state.passwordFocus ? appColor.color : '#000' }]}>
                                <TextInput
                                    keyboardType={'numeric'}
                                    style={{ flex: 1, color: "#fff" }}
                                    placeholderTextColor={this.state.mobErr ? "brown" : "rgba(255, 255, 255, 0.5)"}
                                    placeholder="Mobile"
                                    secureTextEntry={this.state.secureText}
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ mobile: e, mobErr: false })}
                                />

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
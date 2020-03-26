import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "../style";
import { Icon } from 'react-native-elements';
import Modal from "react-native-modal";
import MsgPermission from './msgpermisson';



class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            name: "",
            email: "",
            msgPermission: false,
            mobErr: false,
            nameErr: false,
            emailErr: false
        }
    }


    allowPermission = () => {

        this.setState({ msgPermission: false });


        this.props.navigation.navigate("SignUpOtp", { mobile: this.state.mobile })

    }
    checkMsgPermission = () => {
        if (this.state.mobile == "") {
            this.setState({ mobErr: true })
        } else if (this.state.name == "") {
            this.setState({ nameErr: true })
        }
        else if (this.state.email == "") {
            this.setState({ emailErr: true })
        }
        else {
            this.setState({ msgPermission: true, emailErr: false, mobErr: false, nameErr: false })
        }


    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "#193F78" }}>
                <View>
                    <Modal isVisible={this.state.msgPermission}>
                        <MsgPermission allowMsg={this.allowPermission} />
                        {/* <SuccessMsg /> */}
                    </Modal>
                </View>

                <View style={{ flex: 1, margin: 20, marginTop: 0 }}>

                    <View>
                        <Image source={require("../../assets/logo_green.png")} resizeMode="contain" style={{ width: 70, alignSelf: "flex-end", marginTop: -30 }} />
                    </View>


                    <View style={{ marginTop: -30 }} >
                        <Text style={{ fontSize: 30, color: "#fff" }}>Hi,</Text>
                        <Text style={{ fontSize: 18, color: "#fff" }}>Sign up to Tracy</Text>

                        <View style={[styles.container, { marginTop: "5%" }]}>

                            <View style={styles.SectionStyle}>

                                <TextInput
                                    keyboardType={'numeric'}
                                    style={{ flex: 1, color: "#fff" }}
                                    placeholderTextColor={this.state.mobErr ? "brown" : "rgba(255, 255, 255, 0.5)"}
                                    placeholder="Mobile number"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ mobile: e, mobErr: false })}

                                />

                            </View>
                            <View style={styles.SectionStyle}>
                                <TextInput
                                    style={{ flex: 1, color: "#fff" }}
                                    placeholderTextColor={this.state.nameErr ? "brown" : "rgba(255, 255, 255, 0.5)"}
                                    placeholder="Name"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ name: e, nameErr: false })}

                                />

                            </View>

                            <View style={styles.SectionStyle}>
                                <TextInput
                                    style={{ flex: 1, color: "#fff" }}
                                    placeholderTextColor={this.state.emailErr ? "brown" : "rgba(255, 255, 255, 0.5)"}
                                    placeholder="Email"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(e) => this.setState({ email: e, emailErr: false })}
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
                            }} onPress={this.checkMsgPermission}>
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
                    </View>
                </View>
                <Text style={{ textAlign: 'center', color: "#fff", fontSize: 16 }}>Already Have an Account?<Text style={{ color: "#fff", textDecorationLine: "underline" }} onPress={() => this.props.navigation.navigate("Login")}> Login</Text></Text>

            </ScrollView>
        );
    }
}



export default SignUp;
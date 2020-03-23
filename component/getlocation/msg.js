import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button, Icon } from 'react-native-elements';


class MSG extends Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <Icon
                        name='ios-checkmark-circle-outline'
                        type='ionicon'
                        color='#517fa4'
                        size={30}
                        iconStyle={{ marginTop: 4 }}
                    />
                    <Text style={[styles.contentTitle, { marginLeft: 10 }]}>Sign up done!</Text>
                </View>
                <Text style={styles.contentTitle1}>Before you start the Tracy app needs permission to:</Text>
                <View style={{ flexDirection: "row", marginTop: 24 }}>
                    <View>
                        <Icon
                            name='md-pin'
                            type='ionicon'
                            color='#193F78'
                            iconStyle={{ marginLeft: 5, fontWeight: "bold" }}
                            size={20}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10, color: '#193F78' }}>
                        <Text style={{ color: '#193F78', fontWeight: "bold" }}>Use Device Location</Text>
                        <Text style={{ color: '#193F78' }}>This helps us ensure that device location</Text>
                    </View>
                </View>


                <View style={{ flexDirection: "row", marginTop: 24 }}>
                    <View>
                        <Icon
                            name='md-notifications'
                            type='ionicon'
                            color='#193F78'
                            iconStyle={{ marginLeft: 5, fontWeight: "bold" }}
                            size={20}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10, color: '#193F78' }}>
                        <Text style={{ color: '#193F78', fontWeight: "bold" }}>Send Notifications</Text>
                        <Text style={{ color: '#193F78' }}>So we can share important updates with you</Text>
                    </View>
                </View>



                <View style={{ flexDirection: "row", marginTop: 24, marginBottom: 20 }}>
                    <View>
                        <Icon
                            name='md-camera'
                            type='ionicon'
                            color='#193F78'
                            iconStyle={{ marginLeft: 5, fontWeight: "bold" }}
                            size={20}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10, color: '#193F78' }}>
                        <Text style={{ color: '#193F78', fontWeight: "bold" }}>Use the Camera</Text>
                        <Text style={{ color: '#193F78' }}>So you can scan QR codes</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Button
                        onPress={this.props.allowMsg}
                        title="OK" buttonStyle={{ backgroundColor: "#193F78" }}

                        titleStyle={{ fontSize: 14 }}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: '#193F78' }}>
                        By enabling Location you agreee to our terms and condition to allow us to track your location on realtime in the background.
                </Text>
                </View>


                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: '#193F78' }}>
                        We ensure your data is private and secure by storing your data in a decentralized server.
                </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    content: {
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',

    },
    contentTitle: {
        fontSize: 25,
        marginBottom: 12,
        color: "#193F78",
        textAlign: "center"
    },
    contentTitle1: {
        fontSize: 14,
        marginBottom: 5,
        // textAlign: 'center',
        color: "#193F78"
    },
    textInputStyleView: {
        marginBottom: 32
    },
    textInputStyle: {
        borderBottomColor: "#193F78",
        borderBottomWidth: 1,
        textAlign: "center",
        letterSpacing: 10,
        fontSize: 36,
        color: "#193F78"
    }
});


export default MSG;
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button, Icon } from 'react-native-elements';


class FormOTP extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Auto-fill OTP</Text>
                <Text style={styles.contentTitle1}>Give permission to read your messages so that we can autofill your OTP.</Text>
                <View style={{ flexDirection: "row", marginTop: 24, marginBottom: 20 }}>
                    <View>
                        <Icon
                            name='md-chatboxes'
                            type='ionicon'
                            color='#193F78'
                            iconStyle={{ marginLeft: 5, fontWeight: "bold" }}
                            size={20}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginRight: 10, color: '#193F78' }}>
                        <Text style={{ color: '#193F78', fontWeight: "bold" }}>Read messages </Text>
                        <Text style={{ color: '#193F78' }}>We send OTPs to your registered number to confirm the date being sent through your device.</Text>
                    </View>
                </View>

                <Button
                    onPress={this.props.allowMsg}
                    title="OK" buttonStyle={{ backgroundColor: "#193F78" }}

                    titleStyle={{ fontSize: 14 }}
                />

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
        fontSize: 20,
        marginBottom: 12,
        color: "#193F78",
        textAlign: "center"
    },
    contentTitle1: {
        fontSize: 14,
        marginBottom: 12,
        textAlign: 'center',
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


export default FormOTP;
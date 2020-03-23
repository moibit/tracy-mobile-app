import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from 'react-native-elements';


class FormOTP extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Almost done</Text>
                <Text style={styles.contentTitle1}>Enter the OTP sent to your mobile phone to confirm this submission</Text>
                <View style={styles.textInputStyleView}>
                    <TextInput
                        keyboardType={"numeric"}
                        style={styles.textInputStyle} />
                </View>
                <Button
                    onPress={this.props.submitClose}
                    title="SUBMIT" buttonStyle={{ backgroundColor: "#193F78" }}

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
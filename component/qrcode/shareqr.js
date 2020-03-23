import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class ShareQr extends Component {
    render() {
        return (
            <View style={styles.scene}>
                <Text style={styles.textStyle}>Show this to any doctor or medical representative for assistance</Text>
                <View style={styles.QRcontainer}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" }}
                        resizeMode="contain"
                        style={{ width: 200, height: 200, alignSelf: "center", justifyContent: "center", flex: 1 }}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    scene: {
        flex: 1,
        borderRadius: 10,
        margin: 15,

    },
    textStyle: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 24,
        color: "#193F78",
        lineHeight: 23
    },
    QRcontainer: {
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: "#fff",
        height: "60%"
    }
});
export default ShareQr;
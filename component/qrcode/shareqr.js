import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class ShareQr extends Component {
    render() {
        return (
            <View style={styles.scene}>
                <View style={{ flex: 1, marginTop: 30 }}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" }}
                        resizeMode="contain"
                        style={{ width: 300, height: 300, alignSelf: "center" }}
                    />
                    <Text style={{textAlign:"center",fontSize:12}}>Show this to Doctor/Medical Representative</Text>
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
        elevation: 5

    },
});
export default ShareQr;
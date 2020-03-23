import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class ScanQr extends Component {
    render() {
        return (
            <View style={styles.scene}>
                <Text style={styles.textStyle}>Align the QR code within the highlighted area to scan</Text>
                <View style={{ marginTop: 30, borderRadius: 10, backgroundColor: "#fff", height: "60%" }}>
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
    }
});
export default ScanQr;



// import React, { Component } from 'react';

// import {
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     Linking
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';

// class ScanQr extends Component {
//     onSuccess = e => {
//         Linking.openURL(e.data).catch(err =>
//             console.error('An error occured', err)
//         );
//     };

//     render() {
//         return (
//             <QRCodeScanner
//                 onRead={this.onSuccess}
//                 flashMode={QRCodeScanner.Constants.FlashMode.torch}
//                 topContent={
//                     <Text style={styles.centerText}>
//                         Go to{' '}
//                         <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//                         your computer and scan the QR code.
//           </Text>
//                 }
//                 bottomContent={
//                     <TouchableOpacity style={styles.buttonTouchable}>
//                         <Text style={styles.buttonText}>OK. Got it!</Text>
//                     </TouchableOpacity>
//                 }
//             />
//         );
//     }
// }
// export default ScanQr;

// const styles = StyleSheet.create({
//     centerText: {
//         flex: 1,
//         fontSize: 18,
//         padding: 32,
//         color: '#777'
//     },
//     textBold: {
//         fontWeight: '500',
//         color: '#000'
//     },
//     buttonText: {
//         fontSize: 21,
//         color: 'rgb(0,122,255)'
//     },
//     buttonTouchable: {
//         padding: 16
//     }
// });
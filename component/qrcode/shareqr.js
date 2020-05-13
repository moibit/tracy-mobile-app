import React, {useCallback, useEffect, useRef, useState} from "react";
import {View, Text, StyleSheet, Dimensions, ScrollView} from "react-native";
import Geolocation from 'react-native-geolocation-service';
import QRCode from 'react-native-qrcode-svg';
import { encrypt } from 'react-native-simple-encryption';
import {NavigationEvents} from "react-navigation";
import {Button} from "react-native-elements";

const { width } = Dimensions.get('window');
const ENCRYPTION_KEY = 'tracy_app_dev_key';

const ShareQr = () => {
    const [timestamp, setTimestamp] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [qrData, setQrData] = useState(null);
    let intervalRef = useRef(null);

    const onLocation = ({ coords }) => {
        const { latitude, longitude } = coords;
        const now = new Date();
        setTimestamp(now);
        const jsonData = JSON.stringify({ latitude, longitude, timestamp: now.toISOString() });
        const encryptedData = `https://www.gettracy.app/?token=${encrypt(ENCRYPTION_KEY, jsonData)}`;
        setQrData(encryptedData);
    };

    const generateQrCode = () => Geolocation.getCurrentPosition(onLocation);

    const updateTimeRemaining = useCallback(() => {
        if (timestamp) {
            const now = new Date();
            const secondsLeft = 60 - Math.floor((now - timestamp) / 1000);
            if (secondsLeft <= 0) {
                generateQrCode();
                setTimeRemaining(0)
            } else {
                setTimeRemaining(secondsLeft);
            }
        }
    }, [timestamp]);

    const cancelTimer = () => clearInterval(intervalRef.current);

    useEffect(() => {
        intervalRef.current = setInterval(updateTimeRemaining, 1000);
        return () => clearInterval(intervalRef.current);
    }, [timestamp]);

    return (
        <ScrollView contentContainerStyle={styles.scene}>
            <NavigationEvents
              onDidFocus={generateQrCode}
              onWillBlur={cancelTimer}
            />
            <Text style={styles.textStyle}>Show this to any doctor or medical representative for assistance</Text>
            <View style={styles.qrContainer}>
                { qrData && <QRCode value={qrData} size={width - 80}/> }
            </View>
            <View style={styles.expiresContainer}>
                <Text style={styles.textStyle}>This code expires in {timeRemaining} seconds.</Text>
                <Button
                  buttonStyle={styles.button}
                  title='Generate new code'
                  titleStyle={styles.buttonText}
                  onPress={generateQrCode}
                />
            </View>
        </ScrollView>
    )
};

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
    qrContainer: {
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: "#fff",
        height: "60%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 50,
        width: 180,
        justifyContent: 'center',
        backgroundColor: "#193F78",
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    expiresContainer: {
        alignItems: 'center',
    }
});
export default ShareQr;

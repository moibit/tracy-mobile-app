
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';



class Alert extends Component {
    render() {
        const {body, onAccept} = this.props
        return (
            <View style={styles.content} >
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.contentTitle}>Alert!</Text>
                </View>
                <Text style={styles.textInputStyle}>{body}</Text>
                <Button title="Okay" onPress={onAccept}/>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 30,
        marginBottom: 12,
        marginLeft: 10,
        color: "#193F78"
    },
    textInputStyle: {

        textAlign: "center",
        // letterSpacing: 10,
        fontSize: 18,
        color: "#193F78",
        marginBottom: 10
    }
});

export default Alert;
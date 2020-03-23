
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';



class Success extends Component {
    render() {
        return (
            <View style={styles.content} >
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name='ios-checkmark-circle-outline'
                        type='ionicon'
                        color='#517fa4'
                        size={30}
                        iconStyle={{ marginTop: 8 }}
                    />
                    <Text style={styles.contentTitle}>Done!</Text>
                </View>
                <Text style={styles.textInputStyle}>Your symptoms have been successfully added.</Text>
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
        color: "#193F78"
    }
});

export default Success;
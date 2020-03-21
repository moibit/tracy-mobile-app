import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Button } from 'react-native-elements';


class Report extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textcontainer}>
                    <Text numberOfLines={1} style={styles.Quarantine}>
                        Quarantine
                </Text>
                    <Switch thumbColor="green" />
                </View>

                <View style={styles.textcontainer}>
                    <Button title="Report My Health" />

                </View>

                <View style={styles.textcontainer}>
                    <Button title="Latest Advisory" />

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    textcontainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom: 5,
        marginLeft: 30,
        marginRight: 30
    },
    Quarantine: {
        flex: 1,
        overflow: 'hidden',
        fontSize: 20,
        fontWeight: "700"
    }
})

export default Report;
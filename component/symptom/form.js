import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, } from "react-native";
import { Button } from 'react-native-elements';

class SymptomForm extends Component {
    render() {
        return (

            <View style={{ marginTop: 10,marginBottom:30 }}>

                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Fever
                </Text>
                    <Switch />
                </View>

                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Cough
                </Text>
                    <Switch />
                </View>


                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Shortness of breath
                </Text>
                    <Switch />
                </View>
                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Difficulty breathing
                </Text>
                    <Switch />
                </View>
                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Tiredness
                </Text>
                    <Switch />
                </View>
                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Aches
                </Text>
                    <Switch />
                </View>
                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Runny nose
                </Text>
                    <Switch />
                </View>
                <View style={styles.container}>
                    <Text numberOfLines={1} style={{ flex: 1, overflow: 'hidden' }}>
                        Sore throat
                </Text>
                    <Switch />
                </View>

                <View style={{alignSelf:"center"}}>
                    <Button title="submit"  />
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom: 5
    },
    description: {
        textAlign: "center",
        fontSize: 14
    }

});


export default SymptomForm; 
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SymptomForm from './form';

class Symptoms extends Component {
    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={styles.viewContainer}>
                    <View>
                        <Text style={styles.title}>Report symptoms</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={styles.description}>
                            Signs and symptoms of COVID-19 may appear 2 to 14 days after exposure.
                    </Text>
                        <Text style={[styles.description, { fontWeight: "700" }]}>Pick the symptoms that apply to you:</Text>
                    </View>

                </View>
                <SymptomForm />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#193F78",
        letterSpacing: 0.5
    },
    description: {
        fontSize: 14,
        color: "#193F78"
    },
    container: {
        flex: 1,
        backgroundColor: "#D6EBFE",
    },
    viewContainer: {
        margin: 15
    }

});


export default Symptoms;

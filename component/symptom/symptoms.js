import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SymptomForm from './form';

class Symptoms extends Component {
    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
            >
                <View style={{ margin: 10 }}>
                    <View>
                        <Text style={styles.title}>My Health Report</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.description}>
                            Signs and symptoms of COVID-19 may appear 2 to 14 days after exposure
                    </Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.description}>Please submit your symptoms</Text>
                    </View>
                    <SymptomForm />
                    <View>

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700"
    },
    description: {
        textAlign: "center",
        fontSize: 14
    }

});


export default Symptoms;

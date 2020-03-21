import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TextInput } from "react-native";
import { Button } from 'react-native-elements';

class SymptomForm extends Component {
    render() {
        return (

            <ScrollView
                style={{ flex: 1 }}
            >
                <View style={{ margin: 10 }}>
                    <View>
                        <Text style={styles.title}>My Health Report</Text>
                    </View>


                    <View style={{ marginTop: 10, marginBottom: 30 }}>

                        <View style={[styles.SectionStyle]}>
                            <TextInput
                                // keyboardType={'numeric'}
                                style={{ flex: 1, padding: 10, borderColor: "red" }}
                                placeholder="Enter Patient Mobile number"
                                underlineColorAndroid="transparent"
                            // onFocus={() => { this.setState({ emailFocus: true }) }}
                            // onBlur={() => { this.setState({ emailFocus: false }) }}
                            />


                        </View>


                        <View style={[styles.SectionStyle]}>
                            <TextInput
                                // keyboardType={'numeric'}
                                style={{ flex: 1, padding: 10, borderColor: "red" }}
                                placeholder="Enter Patient Name"
                                underlineColorAndroid="transparent"
                            // onFocus={() => { this.setState({ emailFocus: true }) }}
                            // onBlur={() => { this.setState({ emailFocus: false }) }}
                            />

                        </View>


                        <View style={{ alignSelf: "center" }}>
                            <Button title="submit" />
                        </View>
                    </View>
                </View>
            </ScrollView>




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
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700"
    },
    SectionStyle: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },


});


export default SymptomForm; 
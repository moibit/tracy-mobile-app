import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";


class AboutUs extends Component {
    render() {
        return (

            <View style={{ marginTop: 10, marginBottom: 30 }}>
                <Text style={styles.title}>About Us</Text>
                <View style={{ flex: 1 }}>
                    <Text style={styles.about}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
                </Text>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        marginTop:10
    },
    about: {

        textAlign: "justify",
        margin:20
    }


});


export default AboutUs; 
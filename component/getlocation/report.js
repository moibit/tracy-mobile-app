import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Button, Divider, Icon } from 'react-native-elements';



class Report extends Component {

    
    render() {
        const {reportLocation} = this.props
        return (
            <View style={styles.container}>

            <Divider style={{ backgroundColor: 'rgba(25, 63, 120, 0.2)', height: 0.5 }} />
                <TouchableOpacity onPress={() => reportLocation()} >
                    <View style={styles.textcontainer}>
                        <Text style={styles.textStyle}>Report My Location</Text>
                        <Icon
                            name='md-arrow-forward'
                            type='ionicon'
                            color='#193F78'
                            iconStyle={{ marginLeft: 12 }}
                        />
                    </View>
                </TouchableOpacity>

                <Divider style={{ backgroundColor: 'rgba(25, 63, 120, 0.2)', height: 0.5 }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Symptoms")} disabled>
                    <View style={styles.textcontainer}>
                        <Text style={{ ...styles.textStyle, color:'grey',}}>Report My Health</Text>
                        <Icon
                            name='md-arrow-forward'
                            type='ionicon'
                            color='#193F78'
                            iconStyle={{ marginLeft: 12 }}
                        />
                    </View>
                </TouchableOpacity>
                <Divider style={{ backgroundColor: 'rgba(25, 63, 120, 0.2)', height: 0.5 }} />
                <TouchableOpacity onPress={()=> Linking.openURL("https://t.me/karnataka_Covid19")}>
                <View style={styles.textcontainer}>
                
                    <Text style={styles.textStyle}>Latest advisory</Text>
                    <Icon
                        name='md-arrow-forward'
                        type='ionicon'
                        color='#193F78'
                        iconStyle={{ marginLeft: 12 }}
                    />
                </View>
                </TouchableOpacity>

                <Divider style={{ backgroundColor: 'rgba(25, 63, 120, 0.2)', height: 0.5 }} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32
    },
    textcontainer: {
        flexDirection: 'row',
        paddingBottom: 5,
        marginTop: 16,
        marginBottom: 14,

    },
    textStyle: {
        color: "#193F78",
        fontSize: 18
    }

})

export default Report;
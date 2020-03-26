import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { Button, Card, CheckBox, Slider, Icon, Divider, Tooltip } from 'react-native-elements';
import Modal from 'react-native-modal';
import FormOTP from './formotp';
import SuccessMsg from './success';
import { setTimeout } from 'timers';




class SymptomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [
                {
                    status: false,
                    name: "Fever",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
                {
                    status: false,
                    name: "Cough",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
                {
                    status: false,
                    name: "Shortness of breath",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
                {
                    status: false,
                    name: "Difficulty breathing",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
                {
                    status: false,
                    name: "Tiredness",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
                {
                    status: false,
                    name: "Aches",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
                {
                    status: false,
                    name: "Runny nose",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
                {
                    status: false,
                    name: "Sore Throat",
                    img: "https://i.ya-webdesign.com/images/fever-clipart-body-temperature-13.png",
                },
            ],
            sliderMin: 97,
            slidermax: 107,
            sliderVal: 97,
            isVisible: false,
            isVisible1: false
        }
    }
    checkThisBox = (itemID) => {
        let list = this.state.symptoms;
        list[itemID].checked = !list[itemID].checked
        this.setState({ symptoms: list })
    }
    submitClose = () => {
        this.setState({ isVisible: false, isVisible1: true });
        setTimeout(() => {
            this.setState({ isVisible1: false })
        }, 3000);

    }

    submitClose1 = () => {
        this.setState({ isVisible1: false });
    }
    render() {
        return (
            <View>
                <View>
                    <Modal isVisible={this.state.isVisible}>
                        <FormOTP submitClose={this.submitClose} />
                        {/* <SuccessMsg /> */}
                    </Modal>
                </View>
                <View>
                    <Modal isVisible={this.state.isVisible1}>
                        <SuccessMsg submitClose={this.submitClose} />
                    </Modal>
                </View>
                <FlatList
                    data={this.state.symptoms}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => this.checkThisBox(index)}>
                            <Card containerStyle={[styles.uploadCard]} >
                                <View style={styles.uploadRow}>
                                    <View style={{ borderColor: "rgba(25, 63, 120, 0.1)", borderRightWidth: 1, flex: 0 }}>
                                        <CheckBox
                                            center
                                            checkedIcon='ios-checkmark-circle-outline'
                                            uncheckedIcon='ios-checkmark-circle-outline'
                                            iconType='ionicon'
                                            uncheckedColor={"#193F78"}
                                            checked={this.state.symptoms[index].checked}
                                        />

                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Text style={{ color: "#193F78", fontSize: 24, marginTop: 10, marginLeft: 10 }}>{item.name}</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Image source={{ uri: item.img }} resizeMode="contain" style={{ width: 100, flex: 1 }} />
                                    </View>
                                </View>


                                {item.name == "Fever" ? this.state.symptoms[0].checked ? <View>
                                    <View style={styles.temperatureContainer}>
                                        <Text style={styles.temperatureStyle}>{this.state.sliderVal.toFixed(2)}°F</Text>
                                        <Text style={styles.temperatureStyle}>{this.state.slidermax}°F</Text>
                                    </View>

                                    <Tooltip popover={<Text>Info here</Text>}
                                        withOverlay={false}
                                    >


                                        <Slider
                                            onValueChange={sliderVal => { this.setState({ sliderVal }) }}
                                            thumbTintColor="#2ED88E"
                                            style={{}}
                                            minimumTrackTintColor="#2ED88E"
                                            maximumTrackTintColor="lightgrey"
                                            minimumValue={97}
                                            maximumValue={107}
                                            value={this.state.sliderVal}
                                        />
                                    </Tooltip>

                                </View> : null : null}
                            </Card>
                        </TouchableOpacity>

                    }
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ margin: 20 }}>
                    <Button

                        title="UPLOAD A PHOTO" buttonStyle={{ backgroundColor: "#193F78" }}
                        icon={
                            <Icon
                                name="md-camera"
                                size={20}
                                color="white"
                                type='ionicon'

                            />
                        }
                        iconRight
                        iconContainerStyle={{ marginLeft: 10 }}
                        titleStyle={{ fontSize: 16, marginRight: 10 }}
                    />


                </View>
                <Divider style={{ backgroundColor: 'rgba(25, 63, 120, 0.2)', height: 0.5, marginLeft: 20, marginRight: 20 }} />
                <View style={{ margin: 20 }}>
                    <Button
                        title="SUBMIT" buttonStyle={{ backgroundColor: "#193F78" }}
                        titleStyle={{ fontSize: 16, marginRight: 10 }}
                        onPress={() => this.setState({ isVisible: true })}
                    />


                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        // padding: 20,
        flex: 1,
        flexDirection: "row"
    },
    description: {
        textAlign: "center",
        fontSize: 14
    },
    uploadCard: {
        // marginTop: 20,
        borderRadius: 10,

    },
    dropFileText: {
        fontSize: 11,
        marginTop: 10,
        letterSpacing: 0.3,

    },
    uploadRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    temperatureContainer: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 10
    },
    temperatureStyle: {
        fontSize: 12,
        color: "#193F78"
    }

});


export default SymptomForm; 
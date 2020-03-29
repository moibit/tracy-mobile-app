import React, { Component } from 'react';
import { Text, View, Alert, TouchableHighlight, Modal,StyleSheet } from 'react-native';
import VersionNumber from 'react-native-version-number';

export class CheckForAppUpdate extends Component {
    constructor(props) {
        super(props);
        console.log('Check for upgrade');
        this.state = { modalVisible: false };
    }
    async componentDidMount() {
        // TODO :  add your rest url to get version details
        // TODO : {"mobile":{"minimum":"2.0.1","last":"2.0.1","current":"2.0.1"},"api":"1.4.28"}
        fetch('', {
            method: 'get',
            dataType: 'jsonp',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
        })
        .then((response) => {
           return response.json() // << This is the problem
        })
        .then((responseData) => { // responseData = undefine
            console.log(responseData);
            console.log(VersionNumber.appVersion);
            console.log(VersionNumber.buildVersion);
            console.log(VersionNumber.bundleIdentifier);
            let minimumAppVersion  = responseData && responseData.mobile && responseData.mobile.minimum || undefined;
            if(minimumAppVersion!=undefined){
                getMostSignificantVersionCode = parseInt(minimumAppVersion.split(".")[0]);

                myAppVersion = parseInt(VersionNumber.appVersion.split(".")[0]);

                if(getMostSignificantVersionCode>myAppVersion){
                    console.log('You have to do a mandatory upgrade');
                    this.setState({modalVisible:true});
                }
            }else{
                console.log('No update needed');
            }
            return responseData;

        })
      .catch(function(err) {
          console.log(err);
      })
      
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        { // TODO :  Design this modal as you like i
                        }     
                        <Text>{' Mandatory Upgrade needed'}</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});


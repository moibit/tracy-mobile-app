import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, PermissionsAndroid, ScrollView, Dimensions } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
var { width, height } = Dimensions.get('window');
import Report from "./report";

const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 }
];

class UserLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [],
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }
    componentDidMount() {
        this.findCoordinates();
    }
    findCoordinates = async () => {

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Tracy',
                'message': 'Tracy App access to your location '
            }
        )
        if (granted) {
            // setInterval(() => {
            Geolocation.getCurrentPosition(
                position => {
                    //  const location = JSON.stringify(position);
                    const location = position;
                    var x = { latitude: location.coords.latitude, longitude: location.coords.longitude };
                    //{ latitude: 37.8025259, longitude: -122.4351431 },
                    this.setState({ location: [...this.state.location, x] });
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
            //    }, 3000)

        }
        else {
            Alert.alert("ACCESS_FINE_LOCATION permission denied");
        }
    };
    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <View style={{ height: "50%" }}>
                        <MapView style={styles.mapcontainer}
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                            zoomEnabled={true}
                        // region={this.state.region}
                        >
                            <Polyline
                                coordinates={this.state.location}
                                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                                strokeColors={[
                                    '#7F0000',
                                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                                    '#B24112',
                                    '#E5845C',
                                    '#238C23',
                                    '#7F0000'
                                ]}
                                strokeWidth={6}
                            />
                        </MapView>
                    </View>
                </View>
                <Report />
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        //   alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: "column"
    },

    mapcontainer: {
        flex: 1,
        width: width,
        height: height / 2.5,
    },
});
export default UserLocation;
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ScanQr from './scanqr';
import ShareQr from './shareqr';



const initialLayout = { width: Dimensions.get('window').width };



class Qr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'SCAN QR CODE' },
                { key: 'second', title: 'SHARE QR CODE' },
            ]
        }
    }
    renderScene = SceneMap({
        first: () => <ScanQr />,
        // first: SecondRoute1,
        second: () => <ShareQr />,
        // second: SecondRoute,
    });


    componentDidMount() {
        this.setState({ index: this.props.navigation.state.params.index });
    }
    handleIndexChange = index => {

        this.setState({ index });
    };
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: "#D6EBFE" }}>
                <TabView lazy={true}
                    lazyPreloadDistance={1}
                    navigationState={this.state}
                    renderScene={this.renderScene}
                    onIndexChange={this.handleIndexChange}
                    initialLayout={initialLayout}


                    renderTabBar={props =>
                        <TabBar
                            // tabStyle={{ backgroundColor: this.state.index ? "red" : "blue" }}
                            {...props}
                            indicatorStyle={{ backgroundColor: 'none' }}
                            style={{ margin: 15, marginBottom: 0, backgroundColor: this.state.index ? "#193F78" : "#fff", borderRadius: 10, overflow: "hidden" }}
                            // tabStyle={{ backgroundColor: 'teal', minHeight: 10 }} // here
                            indicatorContainerStyle={{ backgroundColor: this.state.index ? "#fff" : "#193F78", width: "50%" }}
                            renderLabel={({ route, focused, color }) => (
                                <View>
                                    <Text style={{ color: route.key === props.navigationState.routes[this.state.index].key ? "#fff" : "#193F78", margin: 8, fontSize: 16, letterSpacing: 0.02 }}>
                                        {route.title}
                                    </Text>
                                </View>
                            )}
                        />
                    }

                />
            </View>
        );
    }



}



export default Qr;
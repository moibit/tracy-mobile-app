import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
//import FileDetails from './fileDetails';

const SecondRoute1 = () => (
    <View style={[styles.scene, { backgroundColor: 'lightgreen' }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'lightgreen' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };



class Qr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'File Details' },
                { key: 'second', title: 'Versions' },
            ]
        }
    }
    renderScene = SceneMap({
        // first: () => <FileDetails {...this.props}/>,
        first: SecondRoute1,
        second: SecondRoute,
    });

    handleIndexChange = index => {
        this.setState({ index });
    };
    render() {
        // console.log(this.props)
        return (
            <View style={{ flex: 1, margin: 10, marginTop: 0 }}>
                <TabView lazy={true}
                    lazyPreloadDistance={1}
                    navigationState={this.state}
                    renderScene={this.renderScene}
                    onIndexChange={this.handleIndexChange}
                    initialLayout={initialLayout}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: 'white' }}
                            style={{ margin: 15, marginBottom: 0 }}
                            tabStyle={{ backgroundColor: 'teal', minHeight: 30 }} // here
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{ color: "#fff", margin: 8 }}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    }

                />
            </View>
        );
    }



}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        borderRadius: 10,
        margin: 15,
        elevation: 5

    },
});

export default Qr;
import React from 'react';
import { Text, View,TouchableOpacity, Image,Dimensions ,ActivityIndicator} from 'react-native';

export default class SplashScreen extends React.Component {
    render() {
        const screenHeight = Math.round(Dimensions.get('window').height);
        const screenWidth = Math.round(Dimensions.get('window').width);
        return (
            <View style={{height:screenHeight,backgroundColor:'#193F78',width:screenWidth,paddingLeft:screenWidth/5}}>
                    <Image source={require("../../assets/tracy_green.png")} resizeMode="contain" 
                        style={{height:screenHeight/2,width:3*screenWidth/5}} 
                    />
                    <Text style={{color:'#63d98f',marginTop:-screenHeight/6,fontSize:20,fontStyle:'normal'}}>Fighting Covid-19 together!</Text>
                    {this.props.processingWithoutFail ? 
                        <React.Fragment>
                            <ActivityIndicator style={{marginLeft:-screenWidth/5,marginTop:screenHeight/2}} size="large" color="#f2f2f2" />
                            <Text style={{color:'#f2f2f2',fontSize:14,fontStyle:'normal',marginLeft:-screenWidth/12}}>Loading your digital companion powered by MóiBit</Text>
                        </React.Fragment>
                        : 
                        <Text style={{color:'pink',fontSize:14,marginLeft:-screenWidth/10,marginTop:screenHeight/1.8}}>Something went wrong! Please try again after sometime</Text>
                    }
            </View>
        )
    }
}
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen';
import environment from '../environment';
import {Ionicons, Entypo} from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import Modal from 'react-native-modal';
import {Button} from 'native-base';
import AddressModal from './components/AddressModal';
import ItemScreen from "./screens/ItemScreen";
import MainScreen from './screens/MainScreen';
import Bucketscreen from './screens/Bucketscreen';

export default class RootStack extends React.Component {
    state = {isShowAddress: false}

    showAddress = (value) => {
        this.setState({isShowAddress: value});

    }

    render() {


        const Stack = createStackNavigator();

        console.log('calling rootstack')

        return (
            <NavigationContainer>
                <AddressModal show={this.state.isShowAddress}></AddressModal>
              
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: environment['dark'].maincolor,
                        },
                        headerTintColor: environment['dark'].navColor,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#ffffff',
                        },
                        headerBackTitleStyle : {
                            color: '#ffffff'
                        }
                    }}
                >
                      {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> */}
                    {/* <Stack.Screen name="Login" component={LoginScreen}/> */}
                    <Stack.Screen name="Category" component={MainScreen} options={{headerShown: true,
                      headerLeft: () => (
                        <Ionicons onPress={() => this.showAddress(true)} style={{marginLeft: 10}}
                                  name="ios-navigate" size={28} color="white"/>)
                    }} />
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        headerLeft: () => (
                            <Ionicons onPress={() => this.showAddress(true)} style={{marginLeft: 10}}
                                      name="ios-navigate" size={28} color="white"/>)
                    }}
                    />

                    <Stack.Screen name="Item" component={ItemScreen} options={{headerShown: false}} />
                    <Stack.Screen name="Bucket" component={Bucketscreen} options={{
                        headerBackImage: () => (
                            <Ionicons style={{marginLeft: 10}}
                                      name="ios-arrow-back" size={24} color="white"/>)
                    }} />
                </Stack.Navigator>
            </NavigationContainer>


        );


    }

}

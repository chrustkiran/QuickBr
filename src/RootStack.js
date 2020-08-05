import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen';
import environment from '../environment';
import {Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import AddressModal from './components/AddressModal';
import ItemScreen from "./screens/ItemScreen";
import MainScreen from './screens/MainScreen';
import Bucketscreen from './screens/Bucketscreen';
import RegisterScreen from "./screens/RegisterScreen";
import {auth} from "./config/FirebaseConfig";
import {ActionSheet, Root} from "native-base";
import AddressScreen from "./screens/AddressScreen";

export default class RootStack extends React.Component {
    state = {isShowAddress: false}

    showAddress = (value) => {
        this.setState({isShowAddress: value});

    }



    logout = () => {
        auth.signOut();
    }

    showUserActions = (navigation) => {
        const BUTTONS = [
            { text: "Change Address" },
            { text: "Logout" },
            { text: "Cancel"}
        ];
        const DESTRUCTIVE_INDEX = 1;
        const CANCEL_INDEX = 2;

            ActionSheet.show(
                {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: 'Choose Options'
                },
                buttonIndex => {
                    this.handleUserAction(buttonIndex, navigation);
                }
            )
    }

    handleUserAction = (btnIndex, navigation) => {
        if (btnIndex == 1) {
            this.logout();
        } else if (btnIndex == 0) {
            navigation.navigate('Address');
        }
    }

    render() {


        const Stack = createStackNavigator();

        return (
            <Root>
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
                      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                      <Stack.Screen name="Register" component = {RegisterScreen} options={{headerShown: false}} />
                    {/* <Stack.Screen name="Login" component={LoginScreen}/> */}
                    <Stack.Screen name="Category" component={MainScreen} options={({navigation}) => ({
                        headerShown: true,
                      headerLeft: () => (
                          <FontAwesome name="inbox" size={24} color="white" style={{marginLeft: 10}} />),
                        headerRight: () => (
                            <Ionicons onPress={() => {this.showUserActions(navigation)}} style={{marginRight : 10}} name="ios-person" size={28} color="white"/>
                        ),
                        gestureEnabled: false
                    })} />
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        headerLeft: () => (
                            <FontAwesome name="inbox" size={24} color="white" style={{marginLeft: 10}} />), }}

                    />

                    <Stack.Screen name="Item" component={ItemScreen} options={{headerShown: false}} />
                    <Stack.Screen name="Bucket" component={Bucketscreen} options={{
                        headerLeft: (props) => (<HeaderBackButton tintColor={environment.white} label={props.label} />)
                    }} />
                    <Stack.Screen name="Address" component={AddressScreen} options={{title: 'Delivery Address',
                    headerLeft: (props) => (<HeaderBackButton tintColor={environment.white} label={props.label} />)}} />
                </Stack.Navigator>
            </NavigationContainer>
            </Root>

        );


    }

}


{/* <Ionicons onPress={() => this.showAddress(true)} style={{marginLeft: 10}}
                                      name="ios-navigate" size={28} color="white"/>*/}

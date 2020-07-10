import {Button, Container, Content, Form, Input, Item, Root, Spinner, Toast} from 'native-base';
import {Text} from 'react-native'
import environment from '../../environment';
import {auth} from "../config/FirebaseConfig";
import React, {Component} from 'react';

export default class LoginScreen extends React.Component {


    state = {
        email: '',
        password: '',
        isAlreadyLoggedIn: false,
        isLoggedInChecked: false,
        loginClicked: false
    };


    goToHome = () => {
        const navigation = this.props.navigation;
        navigation.navigate('Category');
    };

    login = () => {
        this.setState({loginClicked : true})
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.goToHome()
            })
            .catch((error) => {
                this.setState({loginClicked : false})
                this.showErrorToast(error.message)
            })
    };

    showErrorToast = (errorMessage) => {
        Toast.show({
            position: 'top',
            text: errorMessage,
            type: 'danger'
        })
    };

    bindEmail = (emailInput) => {
        this.setState({email: emailInput})
    };

    bindPassword = (passwordInput) => {
        this.setState({password: passwordInput})
    }


    checkAlreadyLoggedIn = (user) => {
        const navigation = this.props.navigation;
        if (user != null) {
            this.setState({isAlreadyLoggedIn: true});
            navigation.navigate('Category');
        } else {
            this.setState({isAlreadyLoggedIn: false});
            this.clearFormValues();
            navigation.navigate('Login')
        }
        this.setState({isLoggedInChecked: true})
    }

    componentDidMount() {
        auth.onAuthStateChanged(this.checkAlreadyLoggedIn); //this will listen continuously, its logging out by this
    }

    clearFormValues = () => {
        this.setState({email : ''});
        this.setState({password : ''})
        this.setState({loginClicked : false})
    }

    render() {
        const navigation = this.props.navigation;
        const isAlreadyLoggedIn = this.state.isAlreadyLoggedIn
        const isLoggedInChecked = this.state.isLoggedInChecked
        const loginClicked = this.state.loginClicked
        //entire component should be within Root to avoid error for Toast
        return (
            <Root>
                {(isLoggedInChecked && !isAlreadyLoggedIn && !loginClicked) ?
                    <Container style={{backgroundColor: '#ffffff'}}>
                        <Content style={{height: '100%', backgroundColor: environment.white}}>
                            <Form style={{height: '100%', marginTop: '60%', padding: '5%'}}>
                                <Text>
                                    {isLoggedInChecked} {isAlreadyLoggedIn}
                                </Text>
                                <Item>
                                    <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Email"
                                           onChangeText={this.bindEmail.bind(this)}/>
                                </Item>
                                <Item>
                                    <Input style={{width: '70%'}} secureTextEntry={true} placeholderTextColor='black'
                                           placeholder="Password"
                                           onChangeText={this.bindPassword.bind(this)}/>
                                </Item>
                                <Item style={{marginTop: '5%'}}>
                                    <Button style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        backgroundColor: environment.dark.maincolor
                                    }} onPress={() => {
                                        this.login()
                                    }}>
                                        <Text style={{color: environment.white}}> Login </Text>
                                    </Button>
                                </Item>
                                <Button
                                    style={{backgroundColor: environment.white, textAlign: 'center', justifyContent: 'center'}}
                                    onPress={() => navigation.navigate('Register')}>
                                    <Text>
                                        Dont't you have an account?
                                    </Text>
                                </Button>
                            </Form>

                        </Content>
                    </Container>
                    :
                    <Container style={{justifyContent: 'center'}}>
                        <Spinner color='green'/>
                    </Container>

                }
            </Root>

        );
    }
}

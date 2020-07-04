import React from 'react';
import {Body, Button, Container, Content, Form, Header, Input, Item, Root, Title, Toast} from 'native-base';
import {Text} from 'react-native'
import environment from "../../environment";
import {auth} from "../config/FirebaseConfig"

export default class RegisterScreen extends React.Component {

    state = {
        email: '',
        password: '',
        displayname: '',
        phonenumber: ''
    }

    register = () => {
        auth
            .createUserWithEmailAndPassword(this.state.email.trim(), this.state.password)
            .then(() => {
                const user = auth.currentUser;
                user.updateProfile({displayName: this.state.displayname})
                    .then(() => {
                        //this.props.navigation.navigate('Category');
                        if (user && !user.emailVerified) {
                            user.sendEmailVerification().then(
                                console.log("email verification sent to user"));
                            console.log(user);
                        }
                    })
            })
            .catch(error => {
                console.error(error.message)
                this.showErrorToast(error.message);
            })
    }

    showErrorToast = (errorMessage) => {
        Toast.show({
            position: 'top',
            text: errorMessage,
            type: 'danger'
        })
    }


    bindFormInputs = (field, value) => { // as its bind it set value at the end
        let object = {}
        object[field] = value;
        this.setState(object)
    }

    render() {
        return (
            <Root>
                <Container>
                    <Header>
                        <Body>
                            <Title>Register your account</Title>
                        </Body>
                    </Header>
                    <Content>
                        <Form styleignInWithEmailAndPassword={{padding: '1%'}}>
                            <Item>
                                <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Display name"
                                       onChangeText={this.bindFormInputs.bind(this, 'displayname')}/>
                            </Item>
                            <Item>
                                <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Phone number"
                                       onChangeText={this.bindFormInputs.bind(this, 'phonenumber')}/>
                            </Item>
                            <Item>
                                <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Email"
                                       onChangeText={this.bindFormInputs.bind(this, 'email')}/>
                            </Item>
                            <Item>
                                <Input secureTextEntry={true} style={{width: '70%'}} placeholderTextColor='black'
                                       placeholder="Password"
                                       onChangeText={this.bindFormInputs.bind(this, 'password')}/>
                            </Item>
                            <Item>
                                <Input secureTextEntry={true} style={{width: '70%'}} placeholderTextColor='black'
                                       placeholder="Re-Enter Password"/>
                            </Item>
                            <Item style={{marginTop: '5%'}}>
                                <Button style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    backgroundColor: environment.dark.maincolor
                                }} onPress={() => {
                                    this.register()
                                }}>
                                    <Text style={{color: '#ffffff'}}> Register </Text>
                                </Button>
                            </Item>
                            <Item style={{marginTop: '3%'}}>
                                <Button style={{
                                    backgroundColor: environment.white,
                                    width: '95%',
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                }}
                                >
                                    <Text>
                                        Already have an account?
                                    </Text>
                                </Button>
                            </Item>
                        </Form>
                    </Content>
                </Container>
            </Root>

        );
    }
}

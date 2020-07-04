import React from 'react';
import {Button, Container, Content, Form, Header, Input, Item, Body, Title} from 'native-base';
import {Text} from 'react-native'
import environment from "../../environment";


export default class RegisterScreen extends React.Component {

    goToHome = ({navigation}) => {
        //navigation.navigate('Home');
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Register your account</Title>
                    </Body>
                </Header>
                <Content>
                    <Form style={{padding: '1%'}}>
                        <Item>
                            <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Display name"/>
                        </Item>
                        <Item>
                            <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Phone number"/>
                        </Item>
                        <Item>
                            <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Username"/>
                        </Item>
                        <Item>
                            <Input secureTextEntry={true} style={{width: '70%'}} placeholderTextColor='black' placeholder="Password"/>
                        </Item>
                        <Item>
                            <Input secureTextEntry={true} style={{width: '70%'}} placeholderTextColor='black' placeholder="Re-Enter Password"/>
                        </Item>
                        <Item style={{marginTop: '5%'}}>
                            <Button style={{
                                width: '100%',
                                justifyContent: 'center',
                                backgroundColor: environment.dark.maincolor
                            }}>
                                <Text style={{color: '#ffffff'}}> Register </Text>
                            </Button>
                        </Item>
                        <Item style={{marginTop: '3%'}}>
                        <Button style={{backgroundColor: environment.white, width: '95%', textAlign: 'center', justifyContent: 'center'}}
                                onPress={() => navigation.navigate('Register')}>
                            <Text>
                                Already have an account?
                            </Text>
                        </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>

        );
    }
}

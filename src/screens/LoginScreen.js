import React from 'react';
import { Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Toast, Root } from 'native-base';
import environment from '../../environment';
import { Link } from '@react-navigation/native';

export default class LoginScreen extends React.Component{


    state = {
        username : '',
        password: ''
    }

    checkCredentials = () => {
        if (this.state.password == 'kiran' && this.state.username == 'kiran') {
            return true
        }
        return false;
    }

    goToHome = () =>{
        const navigation = this.props.navigation;
        navigation.navigate('Home');
    }

    login = () => {
        if (this.checkCredentials()) {
            this.goToHome();
        } else {
            Toast.show({
                position: 'top',
                text: 'Invalid Credentials',
                type: 'danger'
            })
        }
    }

    bindUsername = (usernameInput) => {
        this.setState({username: usernameInput})
    }

    bindPassword = (passwordInput) => {
        this.setState({password: passwordInput})
    }

    render(){
        const navigation = this.props.navigation;
        //entire component should be within Root to avoid error for Toast
        return(
            <Root>
            <Container style={{backgroundColor: '#ffffff'}}>
            <Content style = {{height: '100%' , backgroundColor: environment.white}}>
              <Form style={{height: '100%', marginTop: '60%', padding: '5%'}} >
                <Item>
                  <Input style={{width: '70%'}}  placeholderTextColor='black' placeholder="Username" onChangeText={this.bindUsername.bind(this)} />
                </Item>
                <Item>
                  <Input style={{width: '70%'}} secureTextEntry={true} placeholderTextColor='black' placeholder="Password" onChangeText={this.bindPassword.bind(this)} />
                </Item>
                <Item style={{marginTop: '5%'}}>
                <Button style={{width: '100%', justifyContent : 'center', backgroundColor:environment.dark.maincolor}} onPress={()=>{this.login()}}>
                 <Text style={{color: '#ffffff'}}> Login </Text>
                 </Button>
                </Item>
                  <Button style={{backgroundColor: '#ffffff', textAlign: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('Register')} >
                      <Text>
                          Dont't you have an account?
                      </Text>
                  </Button>
              </Form>

            </Content>
          </Container>
            </Root>
            
        );
    }
}

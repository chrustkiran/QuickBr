import React from 'react';
import {View, Text} from 'react-native'
import {Body, Button, Container, Content, Form, Header, Input, Item, Title} from "native-base";
import environment from "../../environment";



export default class AddressScreen extends React.Component {

    state = {}

    bindFormInputs = (field, value) => { // as its bind it set value at the end
        let object = {}
        object[field] = value;
        this.setState(object)
    }


    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title> We will deliver your order to
                        </Title>
                        <Title>{this.state.division}, {this.state.lane}, {this.state.door}</Title>
                    </Body>
                </Header>
                <Content>
                    <Form styleignInWithEmailAndPassword={{padding: '1%'}}>
                        <Item>
                            <Input style={{width: '70%'}}
                                   placeholder="Which part of Trincomalee you belong to?"
                                   onChangeText={this.bindFormInputs.bind(this, 'division')}/>
                        </Item>
                        <Item>
                            <Input style={{width: '70%'}}  placeholder="Your lane ex: Ambal Street"
                                   onChangeText={this.bindFormInputs.bind(this, 'lane')}/>
                        </Item>
                        <Item>
                            <Input secureTextEntry={true} style={{width: '70%'}}
                                   placeholder="Door Number"
                                   onChangeText={this.bindFormInputs.bind(this, 'door')}/>
                        </Item>

                        <Item style={{marginTop: '5%', marginRight: '4%'}}>
                            <Button style={{
                                width: '100%',
                                justifyContent: 'center',
                                backgroundColor: environment.dark.maincolor
                            }} onPress={() => {
                                this.register()
                            }}>
                                <Text style={{color: '#ffffff'}}> Save Delivery Address </Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}

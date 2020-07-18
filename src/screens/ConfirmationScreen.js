import React from 'react';
import {Button, Container, Content, Form, Input, Item, Root, Spinner, Toast} from 'native-base';

export default class Bucketscreen extends React.Component {

    state = {
        confirmationCode : ''
    }

    bindConfimationCode = (confirmationInput) =>{
        this.setState({confirmationCode : confirmationInput})
    }



    render() {
        <Container>
            <Content>
                <Form style={{height: '100%', marginTop: '60%', padding: '5%'}}>
                    <Item>
                        <Input style={{width: '70%'}} placeholderTextColor='black' placeholder="Confirmation Code"
                               onChangeText={() => {this.bindConfimationCode(this)}}/>
                    </Item>
                    <Item>
                        <Button onPress={} title={'Ok'}/>
                    </Item>
                    <Item>
                        <Button onPress={} title={'Resend'}/>
                    </Item>
                </Form>
            </Content>
        </Container>
    }

}

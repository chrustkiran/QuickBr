import React, { Component } from 'react';
import { Right, Left, Thumbnail, Body, Header, Content, List, ListItem, Text, Separator, View } from 'native-base';
import {Button} from 'native-base';
import ReceiptData from '../common/ReceiptData';
import environment from '../../environment';
import {db} from '../config/FirebaseConfig';

export default class ItemCardList extends Component {


  addItem = (itemId) => {
    this.props.addItem(itemId);
  }

  removeItem = (itemId) => {
   this.props.removeItem(itemId);
  }



  render() {
    const env = environment;
    const bucket = ReceiptData.bucket;
   const itemId = this.props.name;
    const disabled_val = ((itemId in bucket && bucket[itemId] == 0 ) || !(itemId in bucket));
    return (
        <List>
          <ListItem avatar >
            <Left>
              <Thumbnail source={{ uri: this.props.image }} />
            </Left>
            <Body style={{marginTop: 13}}>
              <Text>{this.props.name}</Text>
              <Text note> Rs {this.props.price} </Text>
            </Body>
            <Right>
            <View  style = {
   {flex:1,
    flexDirection: 'row',
    justifyContent : 'center'
   }
  } >
              <Button onPress={()=>{this.addItem(this.props.name)}} small primary style={{borderRadius:50,width:40,height:40, backgroundColor: env['dark'].maincolor}}>
              <Text style={{textAlign:'center',width: 20,height: 20}}>+</Text>
              </Button>
              <Text note style = {{width: 60,heigt: 50, textAlign:'center',justifyContent:'center',marginTop:10}} >Qty {itemId in bucket? bucket[itemId] : 0}</Text>
              <Button disabled={disabled_val} onPress={()=>{this.removeItem(this.props.name)}} small primary style={{borderRadius:50, width:40, height:40, backgroundColor: env['dark'].maincolor}} >
                 <Text style={{textAlign:'center',width:20,height: 20}}>-</Text>
              </Button>
              </View>
            </Right> 
          </ListItem>
        </List>
    );
  }
}
import React, { Component } from 'react';
import { Right, Left, Thumbnail, Body, Button, Header, Content, List, ListItem, Text, Separator, View } from 'native-base';
import ReceiptData from '../common/ReceiptData';
import environment from '../../environment';

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
   const category = this.props.category;
    const disabled_val = ((category in bucket && itemId in bucket[category] && bucket[category][itemId] == 0 ) 
    || !(category in bucket)  || (category in bucket && !(itemId in bucket[category])));
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
              <Button rounded onPress={()=>{this.addItem(this.props.name)}} small primary style={{ backgroundColor: env['dark'].maincolor}}>
              <Text >+</Text>
              </Button>
              <Text note style = {{width: 60,heigt: 50, textAlign:'center',justifyContent:'center',marginTop:10}} >Qty {(category in bucket && itemId in bucket[category])? bucket[category][itemId] : 0}</Text>
              <Button rounded disabled={disabled_val} onPress={()=>{this.removeItem(this.props.name)}} small primary style={{ backgroundColor: env['dark'].maincolor}} >
                 <Text>-</Text>
              </Button>
              </View>
            </Right> 
          </ListItem>
        </List>
    );
  }
}




/*


+ => borderRadius:50,width:40,height:40,
text => style={{textAlign:'center',width: 20,height: 20}}
-  => borderRadius:50, width:40, height:40,
text => style={{textAlign:'center',width:20,height: 20}}
 */

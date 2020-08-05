import React, {Component} from 'react';
import {Body, Button, Left, List, ListItem, Right, Text, Thumbnail, View} from 'native-base';
import ReceiptData from '../common/ReceiptData';
import environment from '../../environment';

export default class ItemCardList extends Component {

  addItem = (itemId, adjustableBy, price, measure) => {
    this.props.addItem(itemId, adjustableBy, price, measure);
  }

  removeItem = (itemId, adjustableBy) => {
   this.props.removeItem(itemId, adjustableBy);
  }



  render() {
      const COUNT = 'count';
      const UNIT = 'unit';
      const env = environment;
      const bucket = ReceiptData.bucket;
      const itemId = this.props.name;
      const category = this.props.category;
      const measure = this.props.measure;
      const price = this.props.price;
      const adjustableBy = this.props.adjustableBy;

    const isUnit = measure === UNIT ? true : false;

    const disabled_val = ((category in bucket && itemId in bucket[category] && bucket[category][itemId][COUNT] == 0 )
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
              <Button rounded onPress={()=>{this.addItem(this.props.name, adjustableBy, price, measure)}} small primary style={{ backgroundColor: env['dark'].maincolor}}>
              <Text >+</Text>
              </Button>
              <Text note style = {{width: 60,heigt: 50, textAlign:'center',justifyContent:'center',marginTop:10}} >{(category in bucket && itemId in bucket[category])? bucket[category][itemId][COUNT] : 0} {!isUnit ? measure : ''}</Text>
              <Button rounded disabled={disabled_val} onPress={()=>{this.removeItem(this.props.name, adjustableBy)}} small primary style={{ backgroundColor: env['dark'].maincolor}} >
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

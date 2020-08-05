import React from 'react';
import ReceiptData from '../common/ReceiptData';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Root, Toast, Card, Content, Container, Header, CardItem, Body, Title, List, ListItem} from 'native-base';
import environment from "../../environment";
import {OrderLogic} from "../service/OrderLogic";


export default class Bucketscreen extends React.Component {

     styles = StyleSheet.create({
        footer: {
            marginStart: '10%',
            width: '80%',
            position: 'absolute',
            marginTop: '145%'
        }});

     bucketAdditionalData = {
         totalPrice : 0
     }

     makeOrder = () => {
         OrderLogic.makeAnOrder().then(results => {
             if(results) {
                Toast.show({
                    text: 'Order is sent successfully!',
                    style: {backgroundColor: environment.dark.maincolor, justifyContent: 'center'},
                    position: "center",
                    type: "danger"
                 });
             }
         });
     };

     isUnit = (measure) => {
         const UNIT = 'unit';
         console.log(measure);
         if (UNIT === measure) {
             return true;
         }
         return false;
     };

     getPriceForAnItem = (itemCount, price) => {
         const priceForItem = (parseFloat(itemCount) * parseFloat(price)).toFixed(2);
         this.bucketAdditionalData.totalPrice += parseFloat(priceForItem);
         return priceForItem;
    };

    render(){
        const COUNT = 'count';
        const PRICE = 'price';
        const MEASURE = 'measure';
        const bucket = ReceiptData.bucket;
        return(
            <Root>
                <Container>
                    <Header>
                        <Title>
                            Your order summary
                        </Title>
                    </Header>
                    <Content padder >
                        <Card style={{height: '40%', borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1,  borderColor: environment.dark.maincolor}} >
                            <CardItem  >
                                <Title>
                                Bucket
                                </Title>
                            </CardItem>
                            <ScrollView persistentScrollbar={true}>
                        <List>
                        {Object.keys(bucket).map(category => {
                            return (
                                <View>
                                <ListItem itemDivider>
                                    <Text style ={{fontWeight: 'bold'}}>{category}</Text>
                                </ListItem>
                                { Object.keys(bucket[category]).map(item => {
                                    return (
                                    <ListItem>
                                            <Text>
                                                {item}
                                            </Text>
                                        <Text style={{position: 'absolute', marginLeft: 150}}>
                                            {bucket[category][item][COUNT]} {!this.isUnit(bucket[category][item][MEASURE]) ? bucket[category][item][MEASURE] : ''}
                                        </Text>
                                    </ListItem>
                                    )
                                })}


                                </View>
                            )
                        })}
                        </List>
                            </ScrollView>
                        </Card>

                        <Card>
                            <CardItem  >
                                <Title>
                                    Bill
                                </Title>
                            </CardItem>
                            <List>
                                <ListItem>
                                    <Text>
                                        Price of Item
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        Delivery charge
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                       Total
                                    </Text>
                                </ListItem>
                            </List>
                        </Card>
                    </Content>


                </Container>




       {/* <View style={{marginTop : 5}}>
            <Text style={{textAlign: 'center', fontSize: 22}}>
                Your order summary
            </Text>
          {Object.keys(bucket).map(category =>{
            return (
                <View style={{marginTop: 15, marginLeft: 25}}>
                    <Text style={{fontWeight : 'bold', fontSize: 20}}>
                        {category}
                    </Text>
                {Object.keys(bucket[category]).map(item => {
                   return (
                       <View style={{marginLeft: 22, marginTop : 5, flexDirection: 'row'}}>
                       <Text >
                       {item}  
                       </Text>
                       <Text style={{marginLeft: 90, position: 'absolute'}}>
                            :         { bucket[category][item][COUNT]} {!this.isUnit(bucket[category][item][MEASURE]) ? bucket[category][item][MEASURE] : ''}
                       </Text>
                           <Text style={{marginLeft: 180, position: 'absolute'}}>
                               -        Rs {this.getPriceForAnItem(bucket[category][item][COUNT], (bucket[category][item][PRICE]))}
                           </Text>
                       </View>
                   )
               }
            )}
            </View>
           )
          
               
          })}

            <Text style={{marginTop: 70, marginLeft: 70}}>Total         :         Rs {this.bucketAdditionalData.totalPrice.toFixed(2)}</Text>
*/}
           <View style={this.styles.footer}>
               <Button rounded onPress={()=> this.makeOrder()} style={{ backgroundColor: environment['dark'].maincolor, justifyContent: 'center'}}>
                   <Text style={{color: environment.white}}>Make an Order</Text>
               </Button>
           </View>
       
     {/*   </View>*/}
            </Root>
        );
    }



}








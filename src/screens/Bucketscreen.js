import React from 'react';
import ReceiptData from '../common/ReceiptData';
import {View, Text, StyleSheet} from 'react-native';
import { Button, Root, Toast} from 'native-base';
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

    render(){
        const bucket = ReceiptData.bucket;
        return(
            <Root>
        <View style={{marginTop : 5}}>
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
                       <Text style={{marginLeft: 100, position: 'absolute'}}>
                       :     { bucket[category][item]}
                       </Text>
                       </View>
                   )
               }
            )}
            </View>
           )
          
               
           })}

           <View style={this.styles.footer}>
               <Button rounded onPress={()=> this.makeOrder()} style={{ backgroundColor: environment['dark'].maincolor, justifyContent: 'center'}}>
                   <Text style={{color: environment.white}}>Make an Order</Text>
               </Button>
           </View>
       
        </View>
            </Root>
        );
    }



}








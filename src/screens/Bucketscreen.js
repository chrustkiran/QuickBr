import React from 'react';
import ReceiptData from '../common/ReceiptData';
import {View, Image, Text, StyleSheet} from 'react-native';

import { Container, Header, Content } from 'native-base';





export default class Bucketscreen extends React.Component {

    render(){
        const bucket = ReceiptData.bucket;
        return(
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
       
        </View>
            
        );
    }



}








import React, { Component } from 'react';
import { FlatList, Text, View , ScrollView, Image,Button } from 'react-native';

import { Avatar,CheckBox } from "react-native-elements";

import fileJson from '../dates/Estados/estados'

export default class ListaEstados extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}>
                <FlatList 
                horizontal
                data={fileJson.data.estados}
                renderItem={({item}) => 
                    <View style={{width: 120, height: 150,marginLeft: 5, marginTop: 10,marginRight: 5}}>
                        <Avatar  
                        style={{width: 105, height: 74}}               
                        source={{uri: item.foto}}
                        onPress={() => {this.props.handleClick(item.sigla)}}
                        > 
                        </Avatar>                        
                        <Text style={{fontWeight:'bold'}}>{item.sigla}</Text>
                        <Text>{item.nome}</Text> 
                    </View>                        
                }
                keyExtractor={({id}, index) => id.toString()}
                />
            </ScrollView>
      </View>
    );
  }
}
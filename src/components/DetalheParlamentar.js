import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class DetalheParlamentar extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        this.loadDados()
      }

      async loadDados() {
        try {
          let response = await fetch('http://legis.senado.leg.br/dadosabertos/senador/751', {
            method: "GET",
            headers: {Accept: 'application/json'}
          });
          let responseJson = await response.json();

          this.setState({
            isLoading: false,
            dataSource: responseJson.DetalheParlamentar.Parlamentar.OutrasInformacoes.Servico,
          }, function(){});

          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }

    
      render(){
        this.loadDados()
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <Text>Carregando novo...</Text>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View>
            <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                        <View >
                            <CheckBox 
                            title={item.NomeServico} 
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'></CheckBox>
                        </View>                        
                    }
                    keyExtractor={({item}, index) => item}
                    />
          </View>
        );
      }
    }
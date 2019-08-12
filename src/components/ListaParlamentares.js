import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View , ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//import DetalheParlamentar from '../DetalheParlamentar/DetalheParlamentar'

export default class ListaParlamentares extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }

      async loadDados() {
        try {
          let response = await fetch('http://legis.senado.leg.br/dadosabertos/senador/lista/atual?participacao=T&uf=' + this.props.UFEstado, {
            method: "GET",
            headers: {Accept: 'application/json'}
          });
          let responseJson = await response.json();

          this.setState({
            isLoading: false,
            dataSource: responseJson.ListaParlamentarEmExercicio.Parlamentares.Parlamentar,
          }, function(){});

          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }

      componentDidMount(){
        this.loadDados();
      }
    
      render(){
        this.loadDados();
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <Text>Carregando...</Text>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View>
                <ScrollView 
                horizontal>
                    <FlatList
                    horizontal
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                        <View style={{flex: 1, height: 250}}>
                              <Image
                              style={{flex:1 ,width: 200}}
                              source={{uri: item.IdentificacaoParlamentar.UrlFotoParlamentar }}
                              />
                            <Text>Nome: {item.IdentificacaoParlamentar.NomeParlamentar}</Text>  
                            <Text>Email: {item.IdentificacaoParlamentar.EmailParlamentar}</Text>                            
                            <Text>Partido: {item.IdentificacaoParlamentar.SiglaPartidoParlamentar}/{item.IdentificacaoParlamentar.UfParlamentar}</Text>
                        </View>                        
                    }
                    keyExtractor={(item, index) => item.IdentificacaoParlamentar.CodigoParlamentar }
                    />
                </ScrollView>
          </View>
        );
      }
    }
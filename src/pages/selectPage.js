import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ListaEstados  from '../components/ListaEstados'
import ListaParlamentares from '../components/ListaParlamentares'

export default class selectPage extends Component {
    constructor(props){
        super(props);
    
        this.state={
            UFEstado : 'RJ',
        };
        this.setUFEstado = this.setUFEstado.bind(this);
    }

    setUFEstado(UFEstado) {
        this.setState({UFEstado:UFEstado});
    }
    
    render() {
        return (
          <View>
            <ListaEstados handleClick={this.setUFEstado}></ListaEstados>
            <ListaParlamentares UFEstado={this.state.UFEstado}></ListaParlamentares>
          </View>
        )
    }
}

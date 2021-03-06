import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Itens from './Itens';
import axios from 'react-native-axios';

export default class ListaItens extends Component {

  constructor(props){
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //requisiçao http
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then( responde => this.setState({ listaItens: responde.data }) )
      .catch( () => console.log('Erro ao recuperar dados') );
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
          { this.state.listaItens.map( (item, i) => 
            <Itens indice={ i } item={ item }/>
        ) }
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

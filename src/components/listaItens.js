import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Itens from './Itens';
import axios from 'react-native-axios';

export default class ListaItens extends Component {

  constructor(props){
    super(props);

  }

  componentWillMount() {
    //requisiçao http
    // http://faus.com.br/recursos/c/dmairr/api/itens.html

    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then( responde => {
        console.log(responde);
      }).catch( () => console.log('Erro ao recuperar dados') );
  }

  render() {
    return (
      <View>
        <Itens />
        <Itens />
        <Itens />
      </View>
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

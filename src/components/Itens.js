import React, { Component } from 'react';
import { StyleSheet, Text} from 'react-native';

export default class Itens extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <Text>teste item</Text>
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

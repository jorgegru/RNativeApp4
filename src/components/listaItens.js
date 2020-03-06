import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ListaItens extends Component {

  constructor(props){
    super(props);

    console.log('Contruindo a aplicacao');
  }

  componentWillMount() {

    console.log('WILL');
  }

  componentDidMount() {
    console.log('Did');
  }


  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text>Open up dsdsApp.js to dsdsdstart working on your app!</Text>
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

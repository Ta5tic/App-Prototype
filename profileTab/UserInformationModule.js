import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default class AssetExample extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Name:</Text>
          <Text style={styles.paragraph}>
            Matthew Freeman
          </Text>
        <Text style={styles.title}>Email:</Text>
          <Text style={styles.paragraph}>
            matt_freo@msn.com
          </Text>
        <Text style={styles.title}>Phone:</Text>
          <Text style={styles.paragraph}>
            +61 431 812 405
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth - 100,
    height: screenHeight - 5250
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#34495e',
  },
});

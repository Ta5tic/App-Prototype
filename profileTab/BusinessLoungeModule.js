import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Button 
            title="LOGGED IN" 
            color="#841584"
            accessibilityLabel="You are already logged in!"  
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth - 100,
    height: screenHeight - 525
  },
  buttonStyle: {
    width: screenWidth - 120
  }
});

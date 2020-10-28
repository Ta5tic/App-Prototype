import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { Card } from 'react-native-elements'; // 0.17.0
import Modal from 'react-native-modal'; // 2.4.0

import "@expo/vector-icons"; // 6.3.1

const { width, height } = Dimensions.get('window');

export default class FeatureModule extends Component {
  state = {
      visibleModal: null,
  };
  
  renderButton = (onPress, id, title, type, location, offerBarcode, pictureUrl) => (
      <TouchableOpacity style={styles.button} onPress={onPress}>
          <View style={styles.container}>
              <View style={styles.backgroundContainer}>
                <Image style={styles.backdrop} 
                       source={{uri: pictureUrl}}
                       resizeMode = 'cover'
                />
              </View>
              <View style={styles.overlay}>
                  <Text style = {styles.headline}> {title} </Text>
                  <Text style = {styles.body}> {type} </Text>
                  <Text style = {styles.bodyLocation}> {location} </Text>
              </View>
          </View>
      </TouchableOpacity>
  );
  
  renderModalContent = (title, id, offerBarcode, pictureUrl) => (
    <View style={styles.modalContent}>
      <View>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <View style={{ height: 5 }} />
        <View>
            <Image style={styles.modalImage} 
                   source={{uri: pictureUrl}}
            />
        </View>
      <View style={{ height: 5 }} />
        <View>
            <Text>Information regarding the deal!</Text>
        </View>
      <View style={{ height: 40 }} />
        <View>
            <Image style={styles.modalBarcode} 
                   source={{uri: offerBarcode}}
            />
        </View>
    </View>
  );
  
  render() {
    var myId = this.props.id;
    var myTitle = this.props.title;
    var myType = this.props.type;
    var myLocation = this.props.location;
    var myPictureUrl = this.props.pictureUrl;
    var myOfferBarcode = this.props.barcode;
    
    return (
        <View>
            <View style={styles.topRow}>
                <Card style={styles.cardStyle}>
                    {this.renderButton( () => this.setState({ visibleModal: 1}), myId, myTitle, myType, myLocation, myOfferBarcode, myPictureUrl )}
                </Card>
            </View>
            <View>
                <Modal isVisible={this.state.visibleModal === 1}>
                    {this.renderModalContent(myTitle, myId, myOfferBarcode, myPictureUrl)}
                </Modal>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  topRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  cardStyle: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: width - 40,
    height: height / 3.5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    width: width - 40,
    height: height / 7.5,
  },
  backdrop: {
    flexDirection: 'column',
    width: width - 40,
    height: height / 2,
  },
  overlay: {
    alignItems: 'center',
  },
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bodyLocation: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: height
  },
  modalBarcode: {
    width: 200,
    height: 200,
  },
  modalImage: {
    width: 300,
    height: 200,
  },
});
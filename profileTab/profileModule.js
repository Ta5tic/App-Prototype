import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Button, Alert, StatusBar }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.21
import { Ionicons } from '@expo/vector-icons'; // 6.2.1
import { Constants } from 'expo';
import { Card } from 'react-native-elements'; // 0.19.1 

import UserInformation from './UserInformationModule';
import BusinessLounge from './BusinessLoungeModule';


export default class ProfileModule extends Component {
  render() {
    var myTitle = this.props.title;
    var myType = this.props.type;
    var myLocation = this.props.location;
    var myPictureUrl = this.props.pictureUrl;
    
    return (
      <View>
        <Card title="User Information">
          <UserInformation />
        </Card>
        <Card title="Business Lounge">
          <BusinessLounge />
        </Card>
      </View>
      );
  }
}

{/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f5aa89',
  },
});*/}

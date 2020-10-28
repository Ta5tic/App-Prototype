import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Button, Alert, StatusBar }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.21
import { Ionicons } from '@expo/vector-icons'; // 6.2.1
import { Constants } from 'expo';
import { Card } from 'react-native-elements'; // 0.19.1 

import OfferModule from './offerTab/offerModule';
import FeatureModule from './featureTab/featureModule';
import NewsModule from './newsTab/newsModule';
import IndexList from './directoryTab/indexModule';
import ProfileModule from './profileTab/profileModule';

const offerList = [
	{
	  id: '1',
		title: 'Outback Barbers',
		type: 'Hairdresser & Barber Shop',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'http://betheme.muffingroupsc.netdna-cdn.com/be/barber2/wp-content/uploads/2016/06/home_barber2_slider_slide2.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '2',
		title: 'Relish Café',
		type: 'Café',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8UC6mPisOBR-5hsnDSJZoANViGebUxdiEB_oXz6MY6a1gyeK',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '3',
		title: 'Snap Fitness',
		type: 'Gyms & Fitness',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png?1509471214',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '4',
		title: "Xing's Kitchen",
		type: 'Food & Drink',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://www.uniqdish.com.au/wp-content/uploads/2017/11/sushi-2853382_1920-550x420.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '5',
		title: 'Kaoss Kafe',
		type: 'Café',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://img.grouponcdn.com/deal/52BFb2UcdLffyMithWHy/Rx-2048x1229/v1/c700x420.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '6',
		title: 'McDonalds',
		type: 'Food & Drink',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/02/26/103423796-McPick2-FOF-Header.530x298.jpg?v=1456506290',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '7',
		title: 'Advertise Here!',
		type: 'Contact Us',
		location: 'email@email.com',
	  pictureUrl: '',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	}
]

const featuredList = [
	{
	  id: '1',
		title: "Nando's",
		type: 'Bar & Restaurant',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Wuyjqqfgym3G4MAAjayARwT-bS1DMaEOCybKbBt0p_Epees8',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '2',
		title: 'Anytime Fitness',
		type: 'Gym & Fitness',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://www.snapfitness.com/au/assets/ClubPhotos/Free-Weights.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '3',
		title: 'Gala Tavern',
		type: 'Bar & Restaurant',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://i.ebayimg.com/00/s/MTAxMFgxNTE2/z/SxEAAOSwY3BZN2Md/$_20.JPG',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '4',
		title: "Domino's Pizza",
		type: 'Food & Drink',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://h2savecom.files.wordpress.com/2017/06/dominos.jpg?w=1024&h=538',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '5',
		title: "Gloria Jean's",
		type: 'Café',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoX7J5hGVGRtScoGJQ8r5P4xAbQCMFo_DbcyuF1cN6G7CK9AQArA',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '6',
		title: 'SportsPower',
		type: 'Gym & Fitness',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://media.truelocal.com.au/E/B/E5524AA1-0561-449B-B741-ABE87190CB3B/rebel-sport-1-melbourne-sporting-goods-retailers-b19a-938x704.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '7',
		title: 'Coles',
		type: 'Supermarket',
		location: 'Kalgoorlie, WA',
		pictureUrl: 'https://www.injuredworkerssupport.org.au/wp-content/uploads/2013/01/718584-coles.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '8',
		title: 'Mitre 10',
  	type: 'Hardware',
  	location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://www.taffasmitre10.com.au/images/3828.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '9', 
		title: 'Muzz Buzz',
	  type: 'Food & Drink',
  	location: 'Kalgoorlie, WA',
	  pictureUrl: 'http://www.buildingsolutions.net.au/sites/buildingsolutionsnetau/assets/public/Image/galleria/muzz/01.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
	{
	  id: '10',
		title: 'The Exchange',
		type: 'Bar & Restaurant',
		location: 'Kalgoorlie, WA',
	  pictureUrl: 'https://www.thehappiesthour.com/media/636197/pics-8160295.jpg',
	  offerBarcode: 'https://tinyurl.com/ycx3qjup',
	},
]

const directoryList = [
	{
		name: 'Palace Hotel',
		subtitle: 'Restaurants',
		avatar: 'http://www.australiasgoldenoutback.com/uploads/Resources/2e11b6b6-0f11-4597-96bd-9f2800dbd873/12063OLFPalace1.jpg',
		details: "Set in a 19th-century stone building, this traditional hotel with an annexe across the street, lies 2.7 km from the Kalgoorlie Golf Course and 4.4 km from Karlkurla Bushland Park.",
	},
	{
		name: 'Krua Thai and Japanese Restaurant',
		subtitle: 'Restaurants',
		avatar: 'https://s3-media1.fl.yelpcdn.com/bphoto/XGv0j9NJ449zPL-EkKRWnw/ls.jpg',
		details: "Sushi, stir-fries and curries served in a funky restaurant with vivid decor and white tablecloths.",
	},
	{
		name: 'Cecilias On Hay',
		subtitle: 'Restaurants',
		avatar: 'https://www.kalgoorlietourism.com/images/operators/cecilias-on-hay-tapas-bar/873097628.jpg',
		details: "Kalgoorlie's premier venue for accommodation, fine dining, weddings and functions.",
	},
	{
		name: 'Yada Thai',
		subtitle: 'Restaurants',
		avatar: 'https://10619-2.s.cdn12.com/restaurants/small/w320/h220/364678213.jpg',
		details: "(Insert details here)",
	},
	{
		name: 'Blue Monkey Restaurant',
		subtitle: 'Restaurants',
		avatar: 'https://media-cdn.tripadvisor.com/media/photo-s/07/ef/92/bf/blue-monkey-restaurant.jpg',
		details: "Modern Australian food and craft beer in a casual space with sleek wood floors and a courtyard.",
	},
	{
		name: 'Maritana Hair & Beauty Salon',
		subtitle: 'Hairdresser',
		avatar: 'http://s0.yellowpages.com.au/61c4b662-b238-4367-8769-372c554d011c/maritana-hair-beauty-salon-image.jpg',
		details: '',
	},
	{
		name: 'Ahead Of Time Hair & Beauty Spa',
		subtitle: 'Hairdresser',
		avatar: 'http://www.specialdays.com.au/img/hai/12/photo_12437_1386555682.jpg',
		details: '',
	},
	{
		name: 'Strawbry Blonde',
		subtitle: 'Hairdresser',
		avatar: '',
		details: '',
	},
	{
		name: 'Daphne Florist',
		subtitle: 'Florist',
		avatar: 'http://d2fimg.com/daphne-florist-f413862au-1.jpg',
		details: '',
	},
	{
		name: 'Quality Inn Railway Motel',
		subtitle: 'Hotels & Accomodation',
		avatar: 'http://cdn1.buuteeq.com/upload/21854/front-hedge-01.jpeg.1920x1080_default.jpeg',
		details: '',
	},
	{
		name: 'Quest Yelverton',
		subtitle: 'Hotels & Accomodation',
		avatar: 'https://media-cdn.tripadvisor.com/media/photo-o/05/42/ff/de/quest-yelverton-kalgoorlie.jpg',
		details: '',
	},
	{
		name: 'Palace Hotel',
		subtitle: 'Hotels & Accomodation',
		avatar: 'https://t-ec.bstatic.com/images/hotel/max1024x768/561/56189337.jpg',
		details: '',
	},
	{
		name: 'Palace Hotel',
		subtitle: 'Hotels & Accomodation',
		avatar: 'https://t-ec.bstatic.com/images/hotel/max1024x768/561/56189337.jpg',
		details: '',
	},
	{
		name: 'Palace Hotel',
		subtitle: 'Hotels & Accomodation',
		avatar: 'https://t-ec.bstatic.com/images/hotel/max1024x768/561/56189337.jpg',
		details: '',
	},
	{
		name: 'Palace Hotel',
		subtitle: 'Hotels & Accomodation',
		avatar: 'https://t-ec.bstatic.com/images/hotel/max1024x768/561/56189337.jpg',
		details: '',
	},
	{
		name: 'Palace Hotel',
		subtitle: 'Hotels & Accomodation',
		avatar: 'https://t-ec.bstatic.com/images/hotel/max1024x768/561/56189337.jpg',
		details: '',
	},
	{
		name: 'Palace Hotel',
		subtitle: 'Hotels & Accomodation',
		avatar: 'https://t-ec.bstatic.com/images/hotel/max1024x768/561/56189337.jpg',
		details: '',
	},
]

class FeaturePage extends Component {
  render() {
    return (
        <View style={{backgroundColor: '#F18758', paddingBottom: 60}}>
            <Text style={styles.header}>
                  Featured Offers 
            </Text>
            <ScrollView style={{paddingBottom: 60}}>
                <View>
                    {featuredList.map((item, key) => (
                        <FeatureModule 
                          key={key}
                          id={item.id}
                          title={item.title}
                          type={item.type}
                          location={item.location}
                          pictureUrl={item.pictureUrl}
                          barcode={item.offerBarcode}
                        />
                      ))}
                </View>
            </ScrollView>
        </View>
    )
  }
}

class OffersPage extends Component {
  render() {
    return (
          <View style={{backgroundColor: '#F18758', paddingBottom: 60}}>
              <Text style={styles.header}>
                    Welcome to Kalgoorlie! 
              </Text>
              <ScrollView style={{paddingBottom: 60}}>
                  <View>
                      {offerList.map((item, key) => (
                          <OfferModule 
                            key={key}
                            title={item.title}
                            type={item.type}
                            location={item.location}
                            pictureUrl={item.pictureUrl}
                            barcode={item.offerBarcode}
                          />
                        ))}
                  </View>
              </ScrollView>
          </View>
    );
  }
}

class DirectoryPage extends Component {
    render() {
        return(
              <IndexList />
        );
    }
}

class LocalAttractionsPage extends Component {
    render() {
        return(
          <View style={{backgroundColor: '#F18758'}}>
            <View style={{backgroundColor: '#F18758', paddingBottom: 120}}>
                <Text style={styles.header}>
                      LocalAttractions
                </Text>
                <ScrollView style={{paddingBottom: 120}}>
                      <NewsModule />
                </ScrollView>
            </View>
          </View>
        );
    }
}

class ProfilePage extends Component {
    render() {
        return(
          <View>
              <View>
                  <Text style={styles.header}>
                      My Profile
                  </Text>
              </View>
              <View>
                  <ProfileModule />
              </View>
          </View>
        );
    }
}

const MyApp = TabNavigator({
  Featured: {
      screen: FeaturePage,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons 
              name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} 
              size={28} 
              color={focused ? 'black' : 'black'} 
          />
        ),
      }
  },
  Offers: {
      screen: OffersPage,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons 
              name={focused ? 'ios-cash' : 'ios-cash-outline'} 
              size={28} 
              color={focused ? 'black' : 'black'} 
          />
        ),
      }
  },
  Search: {
      screen: DirectoryPage,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons 
              name={focused ? 'ios-search' : 'ios-search-outline'} 
              size={28} 
              color={focused ? 'black' : 'black'} 
          />
        ),
      }
  },
  News: {
      screen: LocalAttractionsPage,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons 
              name={focused ? 'ios-bookmarks' : 'ios-bookmarks-outline'} 
              size={28} 
              color={focused ? 'black' : 'black'} 
          />
        ),
      }
  },
  Profile: {
      screen: ProfilePage,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons 
              name={focused ? 'ios-person' : 'ios-person-outline'} 
              size={28} 
              color={focused ? 'black' : 'black'} 
          />
        ),
      }
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  activeTintColor: 'white',
  
  tabBarOptions: {
    activeTintColor: 'black',
    showIcon: true,
    labelStyle: {
        fontSize: 8,
        fontColor: 'black',
    },
    style: {
      backgroundColor: '#F18758',
    }
  },
});

const styles = StyleSheet.create({
  header: {
      fontSize: 24,
      marginTop: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#F18758',
  },
});

export default MyApp;
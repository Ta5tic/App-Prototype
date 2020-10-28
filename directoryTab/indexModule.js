import React  from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { List, ListItem, Button, Icon, SearchBar } from 'react-native-elements'; // 0.18.5

import "@expo/vector-icons"; // 6.2.2

const directoryList = [
	{
		name: 'Palace Hotel',
		subtitle: 'Restaurants',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Palace_Hannans_side_2014.jpg/240px-Palace_Hannans_side_2014.jpg',
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
		avatar: 'https://drinks-dvq6ncf.netdna-ssl.com//wordpress/wp-content/themes/thedrinksbusiness/images/no_img_available.jpg',
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
		avatar: 'https://drinks-dvq6ncf.netdna-ssl.com//wordpress/wp-content/themes/thedrinksbusiness/images/no_img_available.jpg',
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
		name: 'Unknown',
		subtitle: 'Unknown',
		avatar: 'https://drinks-dvq6ncf.netdna-ssl.com//wordpress/wp-content/themes/thedrinksbusiness/images/no_img_available.jpg',
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

const HomeScreen = ({ navigation }) => (
  <View style={{backgroundColor: '#F18758',}}>
      <Text style={styles.header}>
            Directory 
      </Text>
      <View style={styles.searchButton}>
          <SearchBar
              round
              lightTheme='true'
              placeholder='Type here...'
              placeholderTextColor='#000000'
              containerStyle={{backgroundColor: '#F18758'}}
              inputStyle={{backgroundColor: '#f5aa89'}}
          />
      </View>
      <View>
          <ScrollView>
                <List>
                    {
                        directoryList.map((l, i) => (
                            <TouchableOpacity>
                                <ListItem
                                    darkTheme='true'
                                    key={i}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    avatar={l.avatar}
                                    details={l.details}
                                    containerStyle={{backgroundColor: '#f5aa89'}}
                                    onPress={() => navigation.navigate(
                                      'Details', 
                                      { name: l.name, 
                                        avatar: l.avatar, 
                                        subtitle: l.subtitle,
                                        details: l.details,
                                      })}
                                />
                            </TouchableOpacity>
                        ))
                    }
                </List>
          </ScrollView>
      </View>
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
      <View style = {styles.backgroundContainer}>
          <Image style = {styles.backdrop}
            source = {require("../assets/black.jpg")}
              resizeMode='cover'  
          />
      </View>
      <View style = {styles.overlay}>
          <Text style = {styles.headline}>{navigation.state.params.name}</Text>
          <Text style = {styles.body}>{navigation.state.params.subtitle}</Text>
          <Text style = {styles.bodyLocation}> Kalgoorlie, WA </Text>
      </View>
      <View style = {styles.buttonContainer}>
              <View style = {styles.buttonRow}>
                  <View style = {styles.buttonColumn}>
                      <Icon
                          reverse
                          name='location'
                          type='entypo'
                          color='#F18758'
                      />
                      <Icon
                          reverse
                          name='phone'
                          type='entypo'
                          color='#F18758'
                      />
                  </View>

                  <View style = {styles.buttonColumn}>
                      <Icon
                          reverse
                          name='heart'
                          type='entypo'
                          color='#F18758'
                      />
                      
                      <Icon
                          reverse
                          name='facebook'
                          type='entypo'
                          color='#F18758'
                      />
                  </View>

                  <View style = {styles.buttonColumn}>
                      <Icon
                          reverse
                          name='globe'
                          type='entypo'
                          color='#F18758'
                      />
                      <Icon
                          reverse
                          name='info'
                          type='feather'
                          color='#F18758'
                      />
                  </View>
              </View>
              <View style = {styles.offerContainer}>
                  <Button 
                      rounded
                      title="OFFERS"
                      style = {styles.offerButton}
                  />
              </View>
          </View>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      //title: `${navigation.state.params.name}`,
      avatar: `${navigation.state.params.avatar}`,
      subtitle: `${navigation.state.params.subtitle}`,
      details: `${navigation.state.params.details}`,
      headerTitle: 'Go Back',
      headerStyle:{
        backgroundColor: '#F18758',
        marginTop: 24,
      },
    }),
  },
});

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backdrop: {
    flex:1,
    flexDirection: 'column',
  },
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: 'rgba(0,0,0,alpha)',
    color: 'white',
    marginTop: 105,
    top: 25,
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    top: 25,
  },
  bodyLocation: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    top: 30,
  },
  overlay: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 45,
    width: 350,
  },
  buttonColumn: {
    flexDirection: 'column',
    marginTop: 25,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  offerContainer: {
    width: 300,
    top: 20,
    textAlign: 'center',
  },
  offerButton: {
    width: 300,
    height: 85,
    backgroundColor: 'blue',
  },
  header: {
      fontSize: 24,
      marginTop: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#F18758',
  },
});

export default RootNavigator;
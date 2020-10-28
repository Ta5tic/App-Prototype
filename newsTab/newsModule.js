import React, { Component } from 'react';

import { View, 
         Image, 
         StyleSheet, 
         Text, 
         ScrollView, 
         TouchableOpacity,
         Linking
} from 'react-native';

import { List, ListItem } from 'react-native-elements'; // 0.19.1

import "@expo/vector-icons"; // 6.3.1

const list = [
	{
		title: 'Moules perfect in Kalgoorlie',
		body: 'Brad Moules has played a perfect round of golf at Kalgoorlie Golf Course and will hold the overnight lead at the TX Civil & Logistics WA PGA ...',
		avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRzYQWNdBNdqrVDL3dg_ToBeavrxC4CYnmy0NQ48afeVhFAb6trGG2hO-c4Gz6HkJbh-GUbZ6',
		url: 'https://www.pga.org.au/news/pga-tour-aus/wa-pga/moules-perfect-in-the-kalgoorlie'
	},
	{
		title: 'Qantas flight lands in Kalgoorlie due to medical issue with passenger',
		body: 'A Qantas flight from Perth to Adelaide has had to land in Kalgoorlie on Monday morning due to a...',
		avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXY_mXjOUddeXaX5drJkDQwUKkRTLXFC-LQ6Am7FG-7xRj_xSEV2ixIQWEDr-qV77psZfhBz8K',
		url: 'https://www.watoday.com.au/national/western-australia/qantas-flight-lands-in-kalgoorlie-due-to-medical-issue-with-passenger-20180423-p4zb4e.html'
	},
	{
		title: 'Help the Salvos tackle homelessness and drug abuse',
		body: 'The Salvation Army Kalgoorlie-Boulder Corps has identified homelessness and drug abuse as the biggest areas of need in the Goldfields after ...',
		avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiU59M8_whwqSAaDh23AmhvtJ-8dkQBVBryzw04vH5cDdCNS-KnO7wWcFqmiDN8c-6ASzYtUm3',
		url: 'https://thewest.com.au/news/kalgoorlie-miner/help-the-salvos-tackle-homelessness-and-drug-abuse-ng-b88834997z'
	},
	{
		title: 'Man dead after crash in Kalgoorlie',
		body: 'A 24-year-old man has died after a crash near Kalgoorlie yesterday. At around 3.10pm a Holden commodore and an off-road Honda ...',
		avatar_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGQAZAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgAEAgMHAf/EADoQAAEDAgQDBgQEBgEFAAAAAAECAwQAEQUGEiExQWETFCJRcYEjMkLBUpGhsQcVM9Hh8EMkJWJygv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACIRAAICAgIBBQEAAAAAAAAAAAABAhEhMQMSEyJBQlGBMv/aAAwDAQACEQMRAD8AwwHAIOXopDFnZSx8SQobnoPIULzEkurSSLimxxorTdKVK9qS84Yt/L2QyzoRMWbgXBU2n8XQnlXqJRUaRiTblYvPOR8GkpcksNyXgu6Yyz4QPNf2FdMwnGY2NYc3KhkBJFlNn5m1fhIriC1FSipRJJ3JJuSaJZcxx7A54ebuphdkvNj6k+fqKhDrDCLzTkrOwOHVxNA8dwRnE067aXgNljiaLRn2ZbDb8dwONODUhQ5isnVtRmlvvrDbTY1KWo2AFak6MtM5jiGEvwSS6m6B9fKgrrpdX2bHC+6qM5qzIvGnixEBbhJPoXep6dKask5ORGQ1PxVu73zNMK4I6q69KSU+2Foso9Vb2UsrZXYiRRieNhKGkjUltzbb8SvsKcY8kSoyHGGlJaX/AEwpNioedvKlvE5JzBmZnCm1HuTCit4D6rcf1sPenW6UC6QByHQUzXXAl3llaRFZcYDLzTbiiLK1JBFvKl3uE/KzxxDAlF2KCVOQXFWHI+A//IuOP6U0tlCUKdX8qeJNDIahiUlb7qdbSTZtHL1peqksnKTWgfA/ilNEZPaQ4q1fiK1A+XO5/WpVTG8mCTiDj8FYZQ54loQ2CnVztf8A296lYnwyTNK5I0E8n5lOM4Sp7EGQ06zst07IcA+ofeufZ6xOJiePLkQTqaDaW9VtiRe9qmY8ccnr7rESGYKPChCBbV/vlXuWspS8bPbuq7tCTxdI3X0SOfrWuSawiUa2xdAK+A2qaLCmvEcoYlHmdjDjOyGSfhuJAsR18jTTlrJLEECTiyW5Ek/K0RdDfr+I0PElsPl+hRyhmE4N2rErU5FWNaUjilfT1qtmXMMrHXezN2YaD4Wknj1PnTdjuQUOLcfwp1Lerfu7g8I9Dy9K0ZTycpD4lYszYoV8NhW/D6lfb86frihOyuzXkfKyWtGK4o3uLKYZUOB5KPXyFN2P4h3DB3pJNllJCfWs1PiRKSy0fhoO5pR/iViBSliEk7fMoUyVC22zZ/DmMpaZuIOXu4sNpv03P7j8qbJLxCg2k7mqOW4gwzAIrS/m7PWv/wBlbn97VnFV2slbq/lTvR27FZqzLOVGw1MZpXxXdvSrWBJDEVpoJ1OabgfehUtsSZJmy1JRGRvqVz9BV7BpaXYr81CQG03CDbeurA1FzEsVjRJAaeCdekHc1K5bj2IvTcUeeLm17C3lUpcDHSY+WcKZc1uQmVHQE6CgaR7UVaaSQhCEhLaRZKQLADpXl9RtQucz/N0paC7NXUqOgyOx7Yo+ZxS+TabWHG5PkKWUqywJWHCQnwgb1jewpcZUtmDFeZxiYlTukLZkw+8JYKj4QtxIFr3BF99xcUR14wwy465BYltJWUKcgyArcGxFlWNwQRtekU4sLiy8pZKglNiTw/vVLF5YixChpV3FbXqoMfgFxTKlOsPA/EafQW1k+VjWIaXOlLdWodk3y624VWKWxHZuwhjsIxdXuV771z7EVHHM6ts/MgvBJ6JG5/QV0LFXu6Ye4sWAS2bVzfJLhXmFb31FtZv7ii9jQWGx/wAYlFKAhvjwArKMBGga3hurxEE7W60LQTOxZLeqzd9/vQTOWY+9vLhQiUx0bKP4/wDFM8C1ZUzBjbk6SW21KKAbC3PltTS9/wBpy61ABHeEM6nt+Cjuf7e1J+V2G+8uYlLA7tCGux+tz6R9/YUXcedOATcWl37aWdLV+SaFhYmOPalk34mpWhTKnDdIJ9q8rK5O9FuqO0Y5MdhtMnub8iKpX/VBg2UEDltuL+Y5eXESLj2VJ8CXduMrGrKVH/mbCQGlAfCQNrIQmwAG3C53N6vg61FX0jhVWdh0LEUWnRm3m081Cxv5gjcVWfH2Jxmka8RnLawjCYMlK8MgqWFOOoX3hRWLEuqWm4vqOoXuSo3IFt6mY8XVNxCHhmCIQmHFeDEa4uhb6RdSyOaWxy5qPSh5wCRFdLuXMRfh2/4nFlaD78fzvQbFsQmRSzGx6KplTKitmXBWEFN/mIsNO/O4F6hLjlErGSYdzEwvCwX58hzFYamldoicpKlB0nw6LAFNyTw4WoNGOLYclS4wehtttqdKHVdtGUAN9KuKT041WeeZlPsLjg4nETqceZeeJdccOxUQdjYcLdamLONmJFwjC23mlzlpWpt5RKm0nlYk23F7dKSLldId17hTFcbdxHKiJbrSWnHdQ0g7GxtcetqXMmHs5kl3kiOR7kiimbnGYGGxoDXytthKR0A40PyO0p2Q/qSOwCUqdJ6Xsn3P7Vu+SRnX8thWW+vDcIdfUdEmbskc0t/54/lScbqNHM0S1Spx1fKngKCp2NdL1MEcBeChc9ELCI+yVrLjpHMk8fYCi2fX0MNxsNj7Ntp4eVtqtZBhJbYk4m6ncEttk+XMj/eVK+YpffMVeXe4vZNc8IC2V23OyYaCQd0kmyQd7mpVgQCqPHU4ANTdx6ajXlHog9jrOtKgADYW51Wlv3KWEc/9tWwxiPlUQLcDwqs5dCr6C2QCARuAOe1FImZqdEZtWk7Dc9TVFKkBta3QlSnd1BQv6VhMdOlNklTafEvTuT5C3GhyZapD6nD4Wm0lV+R5U1L3OAuM4LFSVyYqyw4TfQkeEnp5VYybCddnvz5ilrW0nQlS7k3I8zzAFvet0UCc6Em5F7np0pkVpYiBKdrDel8cbsZzdUc9zpJ7bFHEg7J2o7l7Rh2XGlf80i7qhf2T7WAPvShjDhexRwngVE/rTdhCTIw5tSkp0ob06j0qcHfI2PLEEhdxBZW+pSjc3NV0JKlAJFydgPOt89QMhYBuL0XyVh3fcXQ6sXZjfFVfmeQ/P9qdAGiYkYHllqJf4iW/F1UdzXOCC455lRpvzvNLiuxCue9LuCR+8YkyCNkq1K9qDy6AtWOggoLTSST4GwnbpUq82glINh7ivKvZIKLkW51SkSAePCot0W3qo6sH5aRINlaYguf0VlBvyNqGSHHFgxnmlK7TZSkeE2+/vRFxz1vWDLXanxgG9O0cnRuwlthOsM6FFJ03At4vvbpW7E3glK0AghCSSR6VvjYeEpBB06eBtfc8T60AzZiT0Uoh3a7RaCVrA8Wk7AXpG0grLEV9WqYomnSI6IOUmVqPxHArSD1UaSbFyUUp+ZRCR60zZkeShTEFr+nGbCLegrPxbbL8iwkBVEqVc10fLsMYTl4Lc8L0n4i78hyH5fuaTcs4YcTxZppQ+Eg63D/4j+/CnbMksNslIIG21WRKTETHJHeJqzxF9qK5SiHxyFfV4RtyoI8rtHuANztTxl+GUsI1AAAXtXRWbOlgMI0hAFSt1kivKayZRW0COKqrlhJ5q/OpUpg0alsJvxVV/DozZVvevalCTwGgqlpPDe1r1yaSkzJcmTIcUp1bhudvOwFSpWaTyisFsr4LEbVjkfUVEB0H8qsymA9JcW4tZJUb71KlLxP0/pSex4yRAYYwpx9APaOrIUo+Q4Ch2aEXURqIqVKveCHyAGFwWnZ7QWVEXvxFdGhR0JaTa42qVK6OjprJtUynUd1fnUqVKYmf/9k=',
		url: 'https://www.communitynews.com.au/the-advocate/news/man-dead-after-crash-in-kalgoorlie/'
	},
	{
		title: 'Lee hoping to strike golfing gold in Kalgoorlie',
		body: 'Lee has travelled to Kalgoorlie, Western Australia, a town famous for gold mining in hopes of striking golfing gold. He is teeing it up in the TX ...',
		avatar_url: 'data:image/jpeg;base64,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',
		url: 'https://www.pga.org.au/news/pga-tour-aus/wa-pga/lee-hoping-to-strike-golfing-gold-in-kalgoorlie'
	},
	{
		title: 'Gang squad turns screws on bikies',
		body: 'A specialist gang crime squad from Perth has been working with Kalgoorlie police and detectives to target bikie groups in the region.',
		avatar_url: 'data:image/jpeg;base64,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',
		url: 'https://thewest.com.au/news/kalgoorlie-miner/gang-squad-turns-screws-on-bikies-ng-b88828884z'
	},
	{
		title: 'Cool McGraw heats up in Kalgoorlie',
		body: 'Braving the cold, Daniel McGraw has fired himself into the lead early in round two at the TX Civil & Logistics WA PGA Championship.',
		avatar_url: 'data:image/jpeg;base64,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',
		url: 'https://www.pga.org.au/news/pga-tour-aus/wa-pga/cool-mcgraw-heats-up-in-kalgoorlie'
	},
	{
		title: 'Cultural groups sought to add flavour to festival',
		body: 'Community groups and food trucks with a multicultural flair are being called on by the City of Kalgoorlie-Boulder to help...',
		avatar_url: 'data:image/jpeg;base64,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',
		url: 'https://thewest.com.au/news/kalgoorlie-miner/cultural-groups-sought-to-add-flavour-to-festival-ng-b88835158z'
	},
	{
		title: 'City must be top of MRI list: Scott',
		body: 'One Nation Member for Mining and Pastoral Region Robin Scott says Kalgoorlie should be the top of the list for one of 20 new MRI licences ...',
		avatar_url: 'data:image/jpeg;base64,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',
		url: 'https://thewest.com.au/news/kalgoorlie-miner/city-must-be-top-of-mri-list-scott-ng-b88834419z'
	},
	{
		title: 'Astronomy experience out of this world for students',
		body: 'North Kalgoorlie Primary School students gained a new sense of wonder about the universe and a greater understanding of space exploration ...',
		avatar_url: 'data:image/jpeg;base64,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',
		url: 'https://thewest.com.au/news/kalgoorlie-miner/astronomy-experience-out-of-this-world-for-students-ng-b88832431z'
	}
]

function handleOpenURL(url) {
    Linking.openURL(url);
}

export default class NewsModule extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F18758',
      }}>
        
         <ScrollView style={{marginBottom: 10}}>
            <List>
                {
                  list.map((item, i) => (
                      <TouchableOpacity>
                          <ListItem
                              darkTheme='true'
                              roundAvatar
                              title={
                                <View style={styles.titleArea}>
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                </View>
                              }
                              subtitle={
                                <View style={styles.subtitleArea}>
                                    <Text style={styles.subtitle}>
                                        {item.body}
                                    </Text>
                                </View>
                              }
                              avatar={
                                <View style={styles.avatarArea}>
                                    <Image
                                        style={styles.avatar}
                                        source={{ uri: item.avatar_url }}
                                    />
                               </View>
                              }
                              rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: { fontSize: 45, color: '#b3d9ff', } }}
                              containerStyle={{backgroundColor: '#f5aa89', height: 120, marginBottom: 10,}}
                              >
                          
                          </ListItem>
                      </TouchableOpacity>
                  ))
                }
            </List>
         </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitleArea: {
    paddingBottom: 5, 
    paddingTop: 5,
    marginLeft: 5,
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  subtitle: {
    fontSize: 12,
    fontColor: '#9494b8',
  },
  titleArea: {
    paddingBottom: 5, 
    paddingTop: 5,
    marginLeft: 5,
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    fontColor: 'black'
  }, 
  avatarArea: {
    paddingBottom: 5, 
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  avatar: {
    height: 90,
    width: 90,
  },
});
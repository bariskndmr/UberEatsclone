import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './RestaurantItem.style';

const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1}>
      {localRestaurants.map((restaurant, index) => (
        <View key={index} style={Styles.container}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const RestaurantImage = props => {
  return (
    <>
      <Image
        style={Styles.image}
        source={{
          uri: props.image,
        }}
      />
      <MaterialCommunityIcons
        style={Styles.heartIcon}
        name="heart-outline"
        size={24}
      />
    </>
  );
};

const RestaurantInfo = props => {
  return (
    <View style={Styles.ınnerContainer}>
      <View>
        <Text style={Styles.title}>{props.name}</Text>
        <Text style={Styles.time}>30-45 Min. </Text>
      </View>
      <View style={Styles.pointContainer}>
        <Text style={Styles.point}>{props.rating}</Text>
      </View>
    </View>
  );
};

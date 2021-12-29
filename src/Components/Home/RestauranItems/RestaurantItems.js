import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './RestaurantItems.style';

const RestaurantItems = ({navigation, ...props}) => {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          // Navigation için hata veriyordu. Bunu home.js'den parametre olarak göndererek çözdüm.
          onPress={() => {
            navigation.navigate('RestaurantDetailPage', {
              name: restaurant.name,
              image: restaurant.image,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            });
          }}>
          <View style={Styles.container}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RestaurantItems;

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

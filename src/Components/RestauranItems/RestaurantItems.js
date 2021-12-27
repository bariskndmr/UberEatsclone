import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './RestaurantItems.style';

const RestaurantItems = props => {
  return (
    <TouchableOpacity activeOpacity={1}>
      {props.restaurantData.map((restaurant, index) => (
        <View key={index} style={Styles.container}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
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

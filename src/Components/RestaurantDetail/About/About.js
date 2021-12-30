import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './About.style';

const About = props => {
  const {name, image, price, reviews, rating, categories} = props.route.params;

  const formattedCategories = categories.map(cat => cat.title).join(' · ');

  const description = `${formattedCategories} ${
    price ? ' · ' + price : ''
  } · 💳 · ${rating} ⭐️ (${reviews}+) `;
  return (
    <View style={Styles.container}>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestaurantImage = props => {
  return <Image style={Styles.image} source={{uri: props.image}} />;
};

const RestaurantTitle = props => {
  return <Text style={Styles.title}>{props.name}</Text>;
};

const RestaurantDescription = props => {
  return <Text style={Styles.description}>{props.description}</Text>;
};

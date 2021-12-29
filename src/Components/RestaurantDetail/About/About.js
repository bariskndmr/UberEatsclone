import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './About.style';

const image =
  'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg';
const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai - Comfort Food - $$ - 💳 - 4 ⭐️ (2913+)';

const About = props => {
  return (
    <View style={Styles.container}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestaurantImage = props => {
  return <Image style={Styles.image} source={{uri: props.image}} />;
};

const RestaurantTitle = props => {
  return <Text style={Styles.title}>{props.title}</Text>;
};

const RestaurantDescription = props => {
  return <Text style={Styles.description}>{props.description}</Text>;
};

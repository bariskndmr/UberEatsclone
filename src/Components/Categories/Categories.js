import React from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Styles from './Categories.style';

const items = [
  {
    image: require('../../Assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../Assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../Assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../Assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../Assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../Assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../Assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View style={Styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={Styles.button} activeOpacity={1}>
            <Image style={Styles.image} source={item.image} />
            <Text style={Styles.text}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

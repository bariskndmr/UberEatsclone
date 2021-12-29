import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import Styles from './MenuItems.style';

const foods = [
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    image:
      'https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg',
    price: '$19.20',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    image:
      'https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg',
    price: '$19.20',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    image:
      'https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg',
    price: '$19.20',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    image:
      'https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg',
    price: '$19.20',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    image:
      'https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg',
    price: '$19.20',
  },
];

const MenuItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={Styles.container}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo = props => (
  <View style={Styles.foodInfoContainer}>
    <Text style={Styles.title}>{props.food.title}</Text>
    <Text style={Styles.description}>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = props => (
  <View>
    <Image style={Styles.image} source={{uri: props.food.image}} />
  </View>
);

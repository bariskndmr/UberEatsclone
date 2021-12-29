import React from 'react';
import {View} from 'react-native';

import About from 'components/RestaurantDetail/About';
import MenuItems from 'components/RestaurantDetail/MenuItems';

import Styles from './RestaurantDetail.style';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const RestaurantDetail = () => {
  return (
    <View style={Styles.container}>
      <About />
      <Divider width={1.8} style={Styles.divider} />
      <MenuItems />
    </View>
  );
};

export default RestaurantDetail;

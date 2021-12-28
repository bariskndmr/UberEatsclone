import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './BottomTabs.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View style={Styles.container}>
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
};

export default BottomTabs;

const Icon = props => {
  return (
    <TouchableOpacity style={Styles.innerContainer}>
      <FontAwesome5 name={props.name} size={22} />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

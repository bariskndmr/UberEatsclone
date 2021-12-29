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
    <TouchableOpacity>
      <FontAwesome5 style={Styles.innerContainer} name={props.name} size={25} />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

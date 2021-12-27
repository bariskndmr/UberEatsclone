import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Styles from './HeaderTabs.style';

const HeaderTabs = props => {
  return (
    <View style={Styles.container}>
      <HeaderButton
        text="Delivery"
        textColor="white"
        bgColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        textColor="black"
        bgColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = props => {
  return (
    <View
      style={[
        Styles.headerTabContainer,
        {backgroundColor: props.activeTab === props.text ? 'black' : 'white'},
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.setActiveTab(props.text)}>
        <Text
          style={[
            Styles.tabTitle,
            {color: props.activeTab === props.text ? 'white' : 'black'},
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

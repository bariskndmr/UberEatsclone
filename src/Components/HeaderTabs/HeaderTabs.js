import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Styles from './HeaderTabs.style';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View style={Styles.container}>
      <HeaderButton
        text="Delivery"
        textColor="white"
        bgColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        textColor="black"
        bgColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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

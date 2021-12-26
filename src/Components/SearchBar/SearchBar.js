import React from 'react';
import {Text, View} from 'react-native';

import Styles from './SearchBar.style';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
const SearchBar = () => {
  return (
    <View style={Styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            fontWeight: '700',
            borderRadius: 20,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            flexDirection: 'row',
            borderRadius: 50,
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={Styles.leftButtonContainer}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View style={Styles.rightButtonContainer}>
            <Antdesign name="clockcircle" size={11} />
            <Text style={Styles.rightButtonText}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

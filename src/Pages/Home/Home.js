import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Categories from '../../Components/Categories';
import HeaderTabs from '../../Components/HeaderTabs';
import RestaurantItem from '../../Components/RestauranItem';
import SearchBar from '../../Components/SearchBar';

import Styles from './Home.style';

const Home = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.innerContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
      </ScrollView>
      <RestaurantItem />
    </SafeAreaView>
  );
};

export default Home;

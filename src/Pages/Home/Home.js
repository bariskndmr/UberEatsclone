import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Categories from '../../Components/Categories';
import HeaderTabs from '../../Components/HeaderTabs';
import RestaurantItems from '../../Components/RestauranItems';
import {localRestaurants} from '../../Components/RestauranItems/RestaurantItems';
import SearchBar from '../../Components/SearchBar';

import Styles from './Home.style';

const YELP_API_KEY =
  'JVmyMb_ZSu-y89u2GsVJWob66t-JehD6fFxeHACRpfo5xd516hR4643dJj1cZC1sWHwCyB5Gn9zlOaw9twDVpZX-TxW6SYP8aQGyPvSVUp2FbZ98eC5jRnjIG37JYXYx';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState('Seattle');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantFromYelp = () => {
    const YELP_URL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(YELP_URL, apiOptions)
      .then(response => response.json()) // alınan veriyi Json'a dönüştürür.
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantFromYelp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, activeTab]);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.innerContainer}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

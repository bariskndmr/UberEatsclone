import React from 'react';

import Home from './Pages/Home';
import RestaurantDetail from './Pages/RestaurantDetail';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Router = () => {
  const Stack = createNativeStackNavigator();

  const screenOptions = {headerShown: false};

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={screenOptions}>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen
          name="RestaurantDetailPage"
          component={RestaurantDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;

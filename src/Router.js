import React from 'react';

import Home from './Pages/Home';
import RestaurantDetail from './Pages/RestaurantDetail';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="RestaurantDetailPage"
          component={RestaurantDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomePage"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;

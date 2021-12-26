import React from 'react';
import Home from '../src/Pages/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff4b54',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  );
}

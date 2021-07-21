/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native-paper';

import HomeNavigator from './HomeNavigator';
import Counter from './Counter';
import Clock from './Clock';
import People from './People';
import UseReducer from './UseReducer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import type {RouteProp, ParamListBase} from '@react-navigation/native';
type TabBarIconProps = {focused: boolean; color: string; size: number};

const icons: Record<string, string[]> = {
  HomeNavigator: ['home-circle', 'home-circle-outline'],
  Counter: ['eye-plus', 'eye-plus-outline'],
  Clock: ['clock-alert', 'clock-alert-outline'],
  People: ['account-group', 'account-group-outline'],
  UseReducer: ['group', 'ungroup'],
};

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route;
      const focusedSize = focused ? size + 6 : size;
      const focusedColor = focused ? '#00f' : color;
      const [icon, iconOutline] = icons[name];
      const iconName = focused ? icon : iconOutline;

      return <Icon name={iconName} size={focusedSize} color={focusedColor} />;
    },
  };
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen name="Counter" component={Counter} />
      <Tab.Screen name="Clock" component={Clock} />
      <Tab.Screen name="People" component={People} />
      <Tab.Screen name="UseReducer" component={UseReducer} />
    </Tab.Navigator>
  );
}

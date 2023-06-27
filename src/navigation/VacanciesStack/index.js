import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Home from '../../screen/Main/Home';

const VacanciesStack = createStackNavigator();

const VacanciesNavigator = () => {
  return (
    <VacanciesStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Home">
      <VacanciesStack.Screen name="Home" component={Home} />
    </VacanciesStack.Navigator>
  );
};

export default VacanciesNavigator;

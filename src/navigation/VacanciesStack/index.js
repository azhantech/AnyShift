import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Applications from '../../screen/Main/Applications';
import JobDetails from '../../screen/Main/JobDetails';
import GiveReview from '../../screen/Main/GiveReview';

const VacanciesStack = createStackNavigator();

const VacanciesNavigator = () => {
  return (
    <VacanciesStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Applications">
      <VacanciesStack.Screen name="Applications" component={Applications} />
      <VacanciesStack.Screen name="JobDetails" component={JobDetails} />
      <VacanciesStack.Screen name="GiveReview" component={GiveReview} />
    </VacanciesStack.Navigator>
  );
};

export default VacanciesNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Applications from '../../screen/Main/Applications';
import JobDetails from '../../screen/Main/JobDetails';
import GiveReview from '../../screen/Main/GiveReview';
import Vacancies from '../../screen/Main/Vacancies';
import VacancyJobDetails from '../../screen/Main/VacancyJobDetails';

const VacanciesStack = createStackNavigator();

const VacanciesNavigator = () => {
  return (
    <VacanciesStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Vacancies">
      <VacanciesStack.Screen name="Vacancies" component={Vacancies} />
      <VacanciesStack.Screen name="VacancyJobDetails" component={VacancyJobDetails} />
      <VacanciesStack.Screen name="Applications" component={Applications} />
      <VacanciesStack.Screen name="JobDetails" component={JobDetails} />
      <VacanciesStack.Screen name="GiveReview" component={GiveReview} />
    </VacanciesStack.Navigator>
  );
};

export default VacanciesNavigator;

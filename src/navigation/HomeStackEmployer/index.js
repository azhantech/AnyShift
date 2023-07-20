import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Home from '../../screen/Main/Home';
import NotificationScreen from '../../screen/Main/Notification';
import HomeScreen from '../../screen/Employer/HomeScreen';
const HomeStack = createStackNavigator();

const HomeNavigatorEmployer = () => {
    return (
        <HomeStack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}
            initialRouteName="HomeScreen">
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigatorEmployer;

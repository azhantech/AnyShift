import React, { useState } from 'react';
import { Image, LayoutAnimation, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import HomeStack from '../HomeStack';
import ProfileStack from '../ProfileStack';
import VacanciesStack from '../VacanciesStack'
import ShiftStack from '../ShiftStack'
import ChatStack from '../ChatStack'
import styles from './styles';
import QanelasRegular from '../../component/Texts/QanelasRegular';
import { icons } from '../../assets/images';
import HomeNavigatorEmployer from '../HomeStackEmployer';
import CompanyNavigator from '../Employeer/CompanyNavigator';

const Tab = createMaterialTopTabNavigator();

const tabIcons = {
    Home: { icon: icons.tab1 },
    Companies: { icon: icons.companyTab },
    Profile: { icon: icons.tab5 },
};

const TabNavigatorEmployer = props => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarPosition="bottom"
            screenOptions={{ swipeEnabled: false }}
            tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
            <Tab.Screen name="Home" component={HomeNavigatorEmployer} />
            <Tab.Screen name="Companies" component={CompanyNavigator} />
            <Tab.Screen name="Profile" component={ShiftStack} />
        </Tab.Navigator>
    );
};

const MyTabBar = ({ state, navigation }) => {
    const [activeTab, setActiveTab] = useState(null);
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    if (route.name == 'Drawer') {
                        return navigation.openDrawer();
                    }

                    if (!isFocused) {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                        setActiveTab(route?.name);
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        activeOpacity={0.7}
                        style={isFocused ? styles.activeTabColorStyle : styles.tabItem}>
                        <Image source={tabIcons[route?.name].icon} style={[styles.icon(isFocused)]} />
                        <QanelasRegular style={styles.titleColorStyle(isFocused)}>
                            {route?.name}
                        </QanelasRegular>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabNavigatorEmployer;

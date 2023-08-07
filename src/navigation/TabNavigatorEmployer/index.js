import React, {useState} from 'react';
import {Image, LayoutAnimation, TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeStack from '../HomeStack';
import ProfileStack from '../ProfileStack';
import VacanciesStack from '../VacanciesStack';
import ShiftStack from '../ShiftStack';
import ChatStack from '../ChatStack';
import styles from './styles';
import QanelasRegular from '../../component/Texts/QanelasRegular';
import {icons} from '../../assets/images';
import CompanyNavigator from '../Employeer/CompanyNavigator';
import HomeNavigator from '../CompanyNavigation/HomeNavigator';
import SFProDisplayRegular from '../../component/Texts/SFProDisplayRegular';
import JobNavigator from '../CompanyNavigation/JobNavigator';
import PlanningNavigator from '../CompanyNavigation/PlanningNavigator';
import FavoriteNavigator from '../CompanyNavigation/FavoriteNavigator';
import AttendanceNavigator from '../CompanyNavigation/AttendanceNavigator';

const Tab = createMaterialTopTabNavigator();

// const tabIcons = {
//     Home: { icon: icons.tab1 },
//     Companies: { icon: icons.companyTab },
//     Profile: { icon: icons.tab5 },
// };

const tabIcons = {
  Home: {icon: icons.tab1},
  Jobs: {icon: icons.jobs},
  Planning: {icon: icons.planning},
  Attendance: {icon: icons.attendance},
  Favorites: {icon: icons.heartNotFilled},
};

// const TabNavigatorEmployer = props => {
//     return (
//         <Tab.Navigator
//             initialRouteName="Home"
//             tabBarPosition="bottom"
//             screenOptions={{ swipeEnabled: false }}
//             tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
//             <Tab.Screen name="Home" component={HomeNavigatorEmployer} />
//             <Tab.Screen name="Companies" component={CompanyNavigator} />
//             <Tab.Screen name="Profile" component={ShiftStack} />
//         </Tab.Navigator>
//     );
// };

const TabNavigatorEmployer = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={{swipeEnabled: false}}
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Jobs" component={JobNavigator} />
      <Tab.Screen name="Planning" component={PlanningNavigator} />
      <Tab.Screen name="Attendance" component={AttendanceNavigator} />
      <Tab.Screen name="Favorites" component={FavoriteNavigator} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, navigation}) => {
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
            <Image
              source={tabIcons[route?.name].icon}
              style={[styles.icon(isFocused)]}
            />
            <SFProDisplayRegular style={styles.titleColorStyle(isFocused)}>
              {route?.name}
            </SFProDisplayRegular>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavigatorEmployer;

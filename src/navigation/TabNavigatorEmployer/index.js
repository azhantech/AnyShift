import React, {useState} from 'react';
import {Image, LayoutAnimation, TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './styles';
import {icons} from '../../assets/images';
import CompanyNavigator from '../Employeer/CompanyNavigator';
import SFProDisplayRegular from '../../component/Texts/SFProDisplayRegular';
import HomeNavigatorEmployer from '../HomeStackEmployer';
import EmployerProfileNavigator from '../EmployerProfileNavigator';

const Tab = createMaterialTopTabNavigator();

const tabIcons = {
  Home: {icon: icons.tab1},
  Companies: {icon: icons.companyTab},
  Profile: {icon: icons.tab5},
};

// const TabNavigatorEmployer = props => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarPosition="bottom"
//       screenOptions={{swipeEnabled: false}}
//       tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
//       <Tab.Screen name="Home" component={HomeNavigatorEmployer} />
//       <Tab.Screen name="Companies" component={CompanyNavigator} />
//       <Tab.Screen name="Profile" component={ShiftStack} />
//     </Tab.Navigator>
//   );
// };

const TabNavigatorEmployer = props => {
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

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={{swipeEnabled: false}}
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen name="Home" component={HomeNavigatorEmployer} />
      <Tab.Screen name="Companies" component={CompanyNavigator} />
      <Tab.Screen name="Profile" component={EmployerProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigatorEmployer;

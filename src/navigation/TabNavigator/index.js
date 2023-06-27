import React, {useState} from 'react';
import {Image, LayoutAnimation, TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeStack from '../HomeStack';
import styles from './styles';
import QanelasRegular from '../../component/Texts/QanelasRegular'
import { icons } from '../../assets/images';

const Tab = createMaterialTopTabNavigator();

const tabIcons = {
  Home: {icon: icons.tab1},
  Stats: {icon: icons.tab1},
  Chapters: {icon: icons.tab1},
  Reminders: {icon: icons.tab1},
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={{swipeEnabled: false}}
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} />
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
            onPress={onPress}
            activeOpacity={0.7}
            style={isFocused ? styles.activeTabColorStyle : styles.tabItem}>
            <Image source={tabIcons[route?.name].icon} style={[styles.icon]} />
            {isFocused && (
              <QanelasRegular style={styles.titleColorStyle}>
                {route?.name}
              </QanelasRegular>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavigator;

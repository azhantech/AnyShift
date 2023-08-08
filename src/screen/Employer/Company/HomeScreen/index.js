import React, { useLayoutEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { homeDataCompany, homeDataCompanySmall } from '../../../../utils/data';
import HomeCard from '../../../../component/Items/HomeCard';
import HomeCardSmall from '../../../../component/Items/HomeCardSmall';
import { icons } from '../../../../assets/images';

const renderCards = () => {
  return homeDataCompany.map((val, i) => (
    <HomeCard key={i} title={val.title} icon={val.icon} />
  ));
};

const HomeScreen = ({ navigation }) => {
  const homeDataCompanySmall = [
    {
      title: 'post feedback(12)',
      icon: icons.tab4,
      onPress: () => navigation.navigate('PostFeedbackScreen'),
    },
    {
      title: 'job applications(12)',
      icon: icons.profile5,
      onPress: () => navigation.navigate('JobApplicationScreen'),
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChatNavigator');
              }}
              style={styles.textButton}>
              <Image
                source={icons.tab4}
                style={styles.notificationsIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AboutUS', { screen: 'NotificationScreen' });
              }}
              style={styles.textButton}>
              <Image
                source={icons.notification}
                style={styles.notificationsIconStyle}
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  });

  const renderSmallCards = () => {
    return homeDataCompanySmall.map((val, i) => (
      <HomeCardSmall
        key={i}
        title={val.title}
        icon={val.icon}
        onPress={val.onPress}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTopContainer}></View>
      {renderCards()}
      {renderSmallCards()}
    </View>
  );
};

export default HomeScreen;

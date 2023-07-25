import React from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {Image, TouchableOpacity, View} from 'react-native';
import QanelasSemiBold from '../../Texts/QanelasSemiBold';
import QanelasMedium from '../../Texts/QanelasMedium';
import QanelasRegular from '../../Texts/QanelasRegular';

import {useDrawerProgress} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {drawerRoutes} from '../../../navigation/NavigationOptions';
import {generalImage, icons} from '../../../assets/images';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
const routeOrders = [
  'HomeStack',
  'FavStack',
  'PlanningStack',
  'PaymentLogs',
  // 'AboutUS',
  'ContactUs',
];

const AnimatedTouchable = Animated.createAnimatedComponent(View);

const DrawerContent = props => {
  const progress = useDrawerProgress();
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-40 * vw * (1 + 1), 0],
  });
  const animatedStyles = {
    transform: [{translateX}],
  };

  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      console.log(drawerRoutes[routeName]);
      if (routeName === routeOrders[routeOrders.length - 1]) {
        console.log('logout', routeName);
      }

      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };

  return (
    <View style={styles.container}>
      <AnimatedTouchable style={[styles.header, animatedStyles]}>
        <View style={styles.profileImageViewStyle}>
          <Image
            source={generalImage.profile}
            style={styles.profileImage}
          />
        </View>
        <QanelasSemiBold style={styles.name}>James Milner</QanelasSemiBold>

        <View style={styles.locationViewStyle}>
          <Image source={icons.location} style={styles.locationIconStyle} />

          <QanelasMedium style={styles.locationTextStyle}>
            Frankfurt, Germany
          </QanelasMedium>
        </View>
      </AnimatedTouchable>
      <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
      </View>
      <View style={styles.signOutContainer}>
        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => props.navigation.navigate('AuthStack')}>
          <Image source={icons.logout} style={styles.logoutIcons} />
          <QanelasRegular style={styles.signoutText}>Logout</QanelasRegular>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerContent;

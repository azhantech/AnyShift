import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import QanelasBold from '../component/Texts/QanelasBold';
import {vh, vw} from '../utils/dimensions';
import {icons} from '../assets/images';

const titles = {
  Home: 'Home',
  Chat: 'Chat',
};

const backButtonRoutes = {};

const notificationButtonRoutes = {
  Home: 'Home',
  Chat: 'Chat',
};

const navigationOptions = (navProps, props) => {
  return {
    headerTitle: () => getTitle(navProps),
    headerRight: () => renderHeaderRight(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerBackVisible: false,
    headerTitleAlign: 'center',
    headerShown: true,
    headerTransparent: true,
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw, },
    headerStyle: getHeaderStyle(navProps),
  };
};

const getHeaderStyle = props => {
  return {
    height: 15 * vh,
    maxHeight: 20 * vh,
    backgroundColor: 'red'
  };
};

const getTitle = props => {
  return (
    <View style={styles.logoView}>
      <QanelasBold style={styles.titleTextStyle}>
        {titles[props?.route?.name]}
      </QanelasBold>
    </View>
  );
};

const renderHeaderRight = props => {
  if (notificationButtonRoutes[props?.route?.name]) {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('NotificationsScreen');
        }}
        style={styles.textButton}>
        <Image
          source={icons.notification}
          style={styles.notificationsIconStyle}
        />
      </TouchableOpacity>
    );
  }
};

const renderHeaderLeft = props => {
  if (backButtonRoutes[props?.route?.name]) {
    return (
      <TouchableOpacity
        onPress={() => props?.navigation.goBack()}
        style={styles.textButton}>
        <Image source={icons.back} style={styles.backIconStyle} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => props?.navigation.toggleDrawer()}
        style={styles.textButton}>
        <Image source={icons.drawer} style={styles.searchIconStyle} />
      </TouchableOpacity>
    );
  }
};

export const drawerRoutes = {
  HomeStack: {
    label: 'Home',
    icon: icons.homeDrawer,
  },
};

export default navigationOptions;

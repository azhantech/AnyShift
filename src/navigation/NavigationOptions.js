import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import QanelasBold from '../component/Texts/QanelasBold';
import {vh, vw} from '../utils/dimensions';
import {icons} from '../assets/images';
import {colors} from '../utils/appTheme';

const titles = {
  Home: 'Home',
  Chat: 'Chat',
  Profile: 'Profile',
  UpdateName: 'Update Name',
  UpdatePassword: 'Update Password',
  UpdateBankDetails: 'Change Bank Details',
  EditProfile: 'Edit Profile',
  Applications: 'Applications',
  JobDetails: 'Job Details',
  GiveReview: 'Rate Job',
  Vacancies: 'Vacancies',
  VacancyJobDetails: 'Job Details',
  Favorites: 'Favorites',
  NotificationScreen: 'Notifications',
  AboutUS: 'About Us',
  ContactUs: 'ContactUs',
  PaymentLogs: 'Payments Logs',
};

const backButtonRoutes = {
  ChatDetail: 'ChatDetail',
  UpdateName: 'Update Name',
  UpdatePassword: 'Update Password',
  UpdateBankDetails: 'Change Bank Details',
  EditProfile: 'Edit Profile',
  JobDetails: 'Job Details',
  GiveReview: 'Rate Job',
  VacancyJobDetails: 'Job Details',
  NotificationScreen: 'Notifications',
};

const notificationButtonRoutes = {
  Home: 'Home',
  Chat: 'Chat',
  Profile: 'Profile',
  Applications: 'Applications',
  Vacancies: 'Vacancies',
  Favorites: 'Favorites',
  AboutUS: 'About Us',
  ContactUs: 'ContactUs',
  PaymentLogs: 'Payments Logs',
};

const navigationOptions = (navProps, props) => {
  return {
    headerTitle: () => getTitle(navProps),
    headerRight: () => renderHeaderRight(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerBackVisible: false,
    headerTitleAlign: 'center',
    headerShown: true,
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
    headerStyle: getHeaderStyle(navProps),
  };
};

const getHeaderStyle = props => {
  return {
    height: 15 * vh, //25
    maxHeight: 20 * vh,
    backgroundColor: colors.primaryColor,
    // borderBottomRightRadius: vh * 4,
    // borderBottomLeftRadius: vh * 4,
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
          props.navigation.navigate('NotificationScreen');
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
        style={[
          styles.textButton,
          {
            backgroundColor: 'transparent',
          },
        ]}>
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

  FavStack: {
    label: 'Favorites',
    icon: icons.heartNotFilled,
  },
  AboutUS: {
    label: 'About US',
    icon: icons.aboutUsIcon,
  },
  ContactUs: {
    label: 'Contact Us',
    icon: icons.contactUsIcon,
  },
  PaymentLogs: {
    label: 'Payment Logs',
    icons: icons.paymentLogsIcon,
  },
};

export default navigationOptions;

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
  CompanyListScreen: 'Company Management',
  VacancyJobDetails: 'Job Details',
  Favorites: 'Favorites',
  Planning: 'Planning',
  NotificationScreen: 'Notifications',
  AboutUS: 'About Us',
  ContactUs: 'ContactUs',
  PaymentLogs: 'Payments Logs',
  CreateCompanyScreen: 'Create Company',
  JobListScreen: 'Job Management',
  PlanningScreen: 'Planning',
  ReferalCode: 'Referal Code',
  AttendanceListScreen: 'Attendance',
  FavoriteListScreen: 'Favorites',
  EmployeeDetailScreen: 'Employee Detail',
  VacancyDetailScreen: 'Vacancy Detail',
  PostFeedbackScreen: 'Post Feedback',
  JobApplicationScreen: 'Job Applications',
  FeedbackDetailScreen: 'Post Feedback',
  QRScreen: 'QR Code',
  ProfileScreen: 'Company Profile',
  ProfileScreenEmployer: 'Profile',
  EditProfileScreen: 'Edit Profile',
  UpdateNameScreen: 'Update Your Name',
  UpdatePasswordScreen: 'Change Password',
  UpdateBankDetailScreen: 'Change Bank Detail',
  ReviewListScreen: 'Reviews',
  InvoiceListScreen: 'Invoice',
  InvoiceDetailScreen: 'Invoice Detail',
  ManagerListScreen: 'Manager',
  AddManagerScreen: 'Add Manager',
  ManagerDetailScreen: 'Manager Details',
  EditManagerScreen: 'Edit Manager',
  JobDetailScreen: 'Job Detail',
  JobApplicationListScreen: 'Job Applications',
  EmployeeDetailJobApplication: 'Employee Detail',
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
  CreateCompanyScreen: 'Create Company',
  ReferalCode: 'Referal Code',
  EmployeeDetailScreen: 'Employee Detail',
  VacancyDetailScreen: 'Vacancy Detail',
  PostFeedbackScreen: 'Post Feedback',
  JobApplicationScreen: 'Job Applications',
  EditProfileScreen: 'Edit Profile',
  UpdateNameScreen: 'Update Your Name',
  UpdatePasswordScreen: 'Change Password',
  UpdateBankDetailScreen: 'Change Bank Detail',
  FeedbackDetailScreen: 'Post Feedback',
  InvoiceDetailScreen: 'Invoice Detail',
  AddManagerScreen: 'Add Manager',
  ManagerDetailScreen: 'Manager Details',
  EditManagerScreen: 'Edit Manager',
  JobDetailScreen: 'Job Detail',
  JobApplicationListScreen: 'Job Applications',
  EmployeeDetailJobApplication: 'Employee Detail',
};

const notificationButtonRoutes = {
  Home: 'Home',
  HomeScreen: 'HomeScreen',
  Chat: 'Chat',
  Profile: 'Profile',
  Applications: 'Applications',
  Vacancies: 'Vacancies',
  CompanyListScreen: 'Company Management',
  Favorites: 'Favorites',
  Planning: 'Planning',
  AboutUS: 'About Us',
  ContactUs: 'ContactUs',
  PaymentLogs: 'Payments Logs',
  PlanningScreen: 'PlanningScreen',
  FeedbackDetailScreen: 'Post Feedback',
  QRScreen: 'QR Code',
  ProfileScreen: 'Company Profile',
};

const noBorderRoutes = {
  Profile: 'Profile',
  JobDetails: 'Job Details',
  VacancyJobDetails: 'Job Details',
  ReferalCode: 'Referal Code',
  EditProfile: 'Edit Profile',
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
  if (noBorderRoutes[props?.route?.name]) {
    return {
      height: 15 * vh, //25
      maxHeight: 20 * vh,
      backgroundColor: colors.primaryColor,
    };
  }
  return {
    height: 15 * vh, //25
    maxHeight: 20 * vh,
    backgroundColor: colors.primaryColor,
    borderBottomRightRadius: vh * 4,
    borderBottomLeftRadius: vh * 4,
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
    label: 'About Us',
    icon: icons.aboutUsIcon,
  },
  ContactUs: {
    label: 'Contact Us',
    icon: icons.contactUsIcon,
  },
  PaymentLogs: {
    label: 'Payment Logs',
    icon: icons.paymentLogsIcon,
  },
  PlanningStack: {
    label: 'Planning',
    icon: icons.planning,
  },

  // AboutUS: {
  //   label: 'About US',
  //   icon: icons.aboutUsIcon,
  // },
  // ContactUs: {
  //   label: 'Contact Us',
  //   icon: icons.contactUsIcon,
  // },
  // PaymentLogs: {
  //   label: 'Payment Logs',
  //   icons: icons.paymentLogsIcon,
  // },
};

export const drawerRoutesEmployer = {
  HomeStack: {
    label: 'Home',
    icon: icons.homeDrawer,
  },
  AboutUS: {
    label: 'About Us',
    icon: icons.aboutUsIcon,
  },
  QR: {
    label: 'QR Code',
    icon: icons.qrCode,
  },
  ContactUs: {
    label: 'Contact Us',
    icon: icons.contactUsIcon,
  },
};

export const drawerRoutesCompany = {
  HomeStack: {
    label: 'Home',
    icon: icons.homeDrawer,
  },
  AboutUS: {
    label: 'About Us',
    icon: icons.aboutUsIcon,
  },
  Profile: {
    label: 'Profile',
    icon: icons.tab5,
  },
  QR: {
    label: 'QR Code',
    icon: icons.qrCode,
  },
  Reviews: {
    label: 'Reviews',
    icon: icons.star,
  },
  Manager: {
    label: 'Manager',
    icon: icons.profile1,
  },
  Invoice: {
    label: 'Invoice',
    icon: icons.tab2,
  },
  ContactUs: {
    label: 'Contact Us',
    icon: icons.contactUsIcon,
  },
};

export default navigationOptions;

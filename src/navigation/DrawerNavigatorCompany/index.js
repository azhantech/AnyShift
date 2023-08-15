import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreenWrapper from '../../component/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../../component/DrawerComponents/DrawerContent';
import TabNavigator from '../TabNavigator';
import { colors } from '../../utils/appTheme';
import AboutUS from '../../navigation/AboutUsStack';
import navigationOptions from '../NavigationOptions';
import ContactUs from '../../navigation/ContactUsStack';
import PaymentLogs from '../../navigation/paymentLogsStack';
import PlanningStack from '../PlanningStack';
// import FavNavigator from '../FavStack';
import FavStack from '../../navigation/FavStack';
import TabNavigatorEmployer from '../TabNavigatorEmployer';
import { useSelector } from 'react-redux';
import TabNavigatorCompany from '../TabNavigatorCompany';
import ProfileNavigator from '../CompanyNavigation/ProfileNavigator';
import QRStack from '../QRStack';
import ReviewsNavigator from '../CompanyNavigation/ReviewsNavigator';
import InvoiceNavigator from '../CompanyNavigation/InvoiceNavigator';
import ManagerNavigator from '../CompanyNavigation/ManagerNavigator';

const Drawer = createDrawerNavigator();

const AnimatedHomeStackCompany = (...props) => {
  return (
    <DrawerScreenWrapper {...props}>
      <TabNavigatorCompany />
    </DrawerScreenWrapper>
  );
};

const AnimatedAboutUsStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <AboutUS />
    </DrawerScreenWrapper>
  );
};
const AnimatedProfileStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ProfileNavigator />
    </DrawerScreenWrapper>
  );
};
const AnimatedContactUsStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ContactUs />
    </DrawerScreenWrapper>
  );
};
const AnimatedQRStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <QRStack />
    </DrawerScreenWrapper>
  );
};

const AnimatedReviewStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ReviewsNavigator />
    </DrawerScreenWrapper>
  );
};

const AnimatedInvoiceStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <InvoiceNavigator />
    </DrawerScreenWrapper>
  );
};

const AnimatedManagerStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ManagerNavigator />
    </DrawerScreenWrapper>
  );
};

const DrawerNavigatorCompany = props => {
  const type = useSelector(state => state.general.type);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.white,
          width: '55%',
        },
        overlayColor: 'transparent',
        sceneContainerStyle: {
          backgroundColor: colors.screenBackgroundColor,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeStack" component={AnimatedHomeStackCompany} />
      <Drawer.Screen name="AboutUS" component={AnimatedAboutUsStack} />
      <Drawer.Screen name="Profile" component={AnimatedProfileStack} />
      <Drawer.Screen name="ContactUs" component={AnimatedContactUsStack} />
      <Drawer.Screen name="QR" component={AnimatedQRStack} />
      <Drawer.Screen name="Reviews" component={AnimatedReviewStack} />
      <Drawer.Screen name="Invoice" component={AnimatedInvoiceStack} />
      <Drawer.Screen name="Manager" component={AnimatedManagerStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorCompany;

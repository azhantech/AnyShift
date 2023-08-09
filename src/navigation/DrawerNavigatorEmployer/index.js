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
import QRStack from '../QRStack';

const Drawer = createDrawerNavigator();

const AnimatedHomeStack = (...props) => {
  return (
    <DrawerScreenWrapper {...props}>
      <TabNavigatorEmployer />
    </DrawerScreenWrapper>
  );
};

const AnimatedFavStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <FavStack />
    </DrawerScreenWrapper>
  );
};

const AnimatedPlanningStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <PlanningStack />
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
const AnimatedQRStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <QRStack />
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
const AnimatedPaymentLogsStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <PaymentLogs />
    </DrawerScreenWrapper>
  );
};

const DrawerNavigatorEmployer = props => {
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
      <Drawer.Screen name="HomeStack" component={AnimatedHomeStack} />
      <Drawer.Screen name="AboutUS" component={AnimatedAboutUsStack} />
      <Drawer.Screen name="QR" component={AnimatedQRStack} />
      <Drawer.Screen name="ContactUs" component={AnimatedContactUsStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorEmployer;

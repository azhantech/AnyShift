import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';

import DrawerScreenWrapper from '../../component/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../../component/DrawerComponents/DrawerContent';
import {colors} from '../../utils/appTheme';
import AboutUS from '../../navigation/AboutUsStack';
import ContactUs from '../../navigation/ContactUsStack';
import TabNavigatorEmployer from '../TabNavigatorEmployer';
import QRStack from '../QRStack';

const Drawer = createDrawerNavigator();

const AnimatedHomeStack = (...props) => {
  return (
    <DrawerScreenWrapper {...props}>
      <TabNavigatorEmployer />
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

const DrawerNavigatorEmployer = props => {
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

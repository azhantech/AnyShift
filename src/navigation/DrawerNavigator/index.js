import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreenWrapper from '../../component/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../../component/DrawerComponents/DrawerContent';
import TabNavigator from '../TabNavigator';
import {colors} from '../../utils/appTheme';
import AboutUS from '../../navigation/AboutUsStack';
import navigationOptions from '../NavigationOptions';
import ContactUs from '../../navigation/ContactUsStack';
import PaymentLogs from '../../navigation/paymentLogsStack';
// import FavNavigator from '../FavStack';

const Drawer = createDrawerNavigator();
const AnimatedHomeStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <TabNavigator />
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
// const AnimatedFavStack = props => {
//   return (
//     <DrawerScreenWrapper {...props}>
//       <FavNavigator />
//     </DrawerScreenWrapper>
//   );
// };

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.drawerColor,
          width: '55%',
        },
        overlayColor: 'transparent',
        sceneContainerStyle: {
          backgroundColor: colors.drawerColor,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeStack" component={AnimatedHomeStack} />
      <Drawer.Screen name="AboutUS" component={AnimatedAboutUsStack} />
      <Drawer.Screen name="ContactUs" component={AnimatedContactUsStack} />
      <Drawer.Screen name="PaymentLogs" component={AnimatedPaymentLogsStack} />

      {/* <Drawer.Screen name="FavStack" component={AnimatedFavStack} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

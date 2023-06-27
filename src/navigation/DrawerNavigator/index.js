import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreenWrapper from '../../component/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../../component/DrawerComponents/DrawerContent';
import TabNavigator from '../TabNavigator';
import {colors} from '../../utils/appTheme';

const Drawer = createDrawerNavigator();
const AnimatedHomeStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <TabNavigator />
    </DrawerScreenWrapper>
  );
};

// const AnimatedProfileStack = props => {
//   return (
//     <DrawerScreenWrapper {...props}>
//       <ProfileStack />
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
      drawerContent={props => <DrawerContent {...props} />}
      >
      <Drawer.Screen name="HomeStack" component={AnimatedHomeStack} />
      {/* <Drawer.Screen name="ProfileStack" component={AnimatedProfileStack} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

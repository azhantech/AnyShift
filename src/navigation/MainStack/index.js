import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../AuthStack';
import DrawerNavigator from '../DrawerNavigator';
const RootStack = createStackNavigator();

const MainNavigator = () => {
  const loggedIn = true;
  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      {loggedIn ? (
        <RootStack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <RootStack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
};

export default MainNavigator;

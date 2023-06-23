import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Login" component={LoginStack} />
        <Drawer.Screen name="Register" component={RegisterStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

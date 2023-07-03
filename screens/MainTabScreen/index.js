import React from 'react';
import Login from '../Login';
import Register from '../Register';
import GameScreen from '../Game';
import TheGameScreen from '../TheGame.js';
import {DrawerContent} from '../DrawerContent/drawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from '../TabNavigation/tabs';

const Drawer = createDrawerNavigator();

const screenStyles = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
};

export const Navigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          ...screenStyles,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register',
          ...screenStyles,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Game"
        component={GameScreen}
        options={{
          title: 'Game',
          ...screenStyles,
        }}
      />
      <Drawer.Screen
        name="TheGame"
        component={TheGameScreen}
        options={{
          title: 'The Game',
          unmountOnBlur: true,
          ...screenStyles,
        }}
      />
      <Drawer.Screen
        name="Tabs"
        component={TabNavigation}
        options={{
          title: 'Tabs',
          ...screenStyles,
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Login';
import Register from '../Register';
import HomeScreen from '../Home';
import GameScreen from '../Game';
import TheGameScreen from '../TheGame.js';
import {DrawerContent} from './screens/DrawerContent/drawerContent';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{backgroundColor: '#fff'}} {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
    </DrawerContentScrollView>
  );
}

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        screenOptions=
        {{
          drawerActiveBackgroundColor: 'coral',
          drawerInactiveTintColor: 'coral',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: {fontSize: 16, lineHeight: 19, fontWeight: '600'},
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 6,
            paddingVertical: 12,
          },
        }}
        drawerContents={props => <CustomDrawerContent {...props} />}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
        <Drawer.Screen
          name="Game"
          component={GameScreen}
          options={{
            title: 'Game',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
        <Drawer.Screen
          name="TheGame"
          component={TheGameScreen}
          options={{
            title: 'TheGame',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

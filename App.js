import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Login from './screens/Login';
import Register from './screens/Register';
import HomeScreen from './screens/Home';
import GameScreen from './screens/Game';
import TheGameScreen from './screens/TheGame.js';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{backgroundColor: '#fff'}} {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
    </DrawerContentScrollView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: 'coral',
          drawerInactiveTintColor: 'coral',
          drawerActiveTintColor: 'grey',
          drawerLabelStyle: {fontSize: 16, lineHeight: 19, fontWeight: '600'},
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 6,
            paddingVertical: 12,
          },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
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
}

export default App;

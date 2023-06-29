import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home';
import FindScreen from '../Find';
import PostScreen from '../Post';
import SettingsScreen from '../Settings';
import ChatScreen from '../Chat/chat';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => navigation.navigate('Home')}>
              <Icon
                name="home"
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
                  fontSize: 16,
                }}>
                Home
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => navigation.navigate('Find')}>
              <Icon
                name="find-in-page"
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
                  fontSize: 16,
                }}>
                Find
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => navigation.navigate('Post')}>
              <Icon
                name="mail"
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#000' : '#748c94',
                  fontSize: 16,
                }}>
                Post
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  // Define the styles for light and dark themes
  const styles = isDarkTheme ? darkStyles : lightStyles;

  return (
    <View style={styles.viewDrawer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-9/167427853_105756281618072_5135626485186527955_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=GHsaXms-4-AAX_8xtWY&_nc_ht=scontent.fsof10-1.fna&oh=00_AfBhbpEeTf2f6ExfbwqNrZUdiQOzksxs84H76HFGKwiSpg&oe=64C268AF',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Little Husky</Title>
                <Caption style={styles.caption}>malkotohuski@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="person" color={color} size={size} />
              )}
              label="My Account"
              onPress={() => {
                props.navigation.navigate('Login');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="leaderboard" color={color} size={size} />
              )}
              label="Leader Board"
              onPress={() => {
                props.navigation.navigate('Register');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="videogame-asset" color={color} size={size} />
              )}
              label="The Game"
              onPress={() => {
                props.navigation.navigate('Game');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="contact-support" color={color} size={size} />
              )}
              label="Contacts-us"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sing Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  // Light theme styles
  viewDrawer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerContent: {
    flex: 1,
    backgroundColor: 'white', // Change to the desired light background color
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'black', // Change to the desired light text color
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'black', // Change to the desired light text color
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

const darkStyles = StyleSheet.create({
  // Dark theme styles
  viewDrawer: {
    flex: 1,
    backgroundColor: '#999',
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#999', // Change to the desired dark background color
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white', // Change to the desired dark text color
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white', // Change to the desired dark text color
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

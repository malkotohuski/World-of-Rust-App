import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Navigator} from './screens/MainTabScreen';
import Tabs from './screens/TabNavigation/tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Tabs from './screens/TabNavigation/tabs';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Navigator />
        {/* <Tabs /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import styles from '../../styles/styles';
import {Button, View, Text, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.SettingsStyles}>
      <Text>Settings!</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default SettingsScreen;

import React from 'react';
import styles from '../../styles/styles';
import {Button, View, Text} from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.chatStyles}>
      <Text>Chat!</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default ChatScreen;

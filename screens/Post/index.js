import React from 'react';
import styles from '../../styles/styles';
import {Button, View, Text} from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.postStyle}>
      <Text>Post</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default PostScreen;

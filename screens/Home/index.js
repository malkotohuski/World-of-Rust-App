import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{fontWeight: 'bold', alignContent: 'flex-start'}}>
        Lets play{' '}
      </Text>
      <Button title="Play" onPress={() => navigation.navigate('Game')} />
      <Image
        source={{
          uri: 'https://sportshub.cbsistatic.com/i/2022/01/08/008a6ac2-5e3b-4d8a-92be-ebadaa6efa2a/rust.png',
        }}
        style={{width: 400, height: 700}}
      />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {View, Button, Image, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../images/backgroundImageRust.jpg')}
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#777',
      }}>
      <View style={styles.homeTitle}>
        <Image
          source={require('../../images/rustImage.png')}
          style={styles.homeImage}
        />
        <Button title="Play" onPress={() => navigation.navigate('Game')} />
      </View>
      {/*  <Text style={{fontWeight: 'bold', alignContent: 'flex-start'}}>
        Lets play{' '}
      </Text> */}

      <Image
        source={{
          uri: 'https://sportshub.cbsistatic.com/i/2022/01/08/008a6ac2-5e3b-4d8a-92be-ebadaa6efa2a/rust.png',
        }}
        style={{width: 400, height: 700}}
      />
    </ImageBackground>
  );
};

export default HomeScreen;

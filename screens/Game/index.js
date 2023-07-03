import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../../styles/styles';

const GameScreen = () => {
  const navigation = useNavigation();
  console.log('sad');

  const handlerTheGame = () => {
    navigation.navigate('TheGame');

    console.log('Submitted');
  };

  return (
    <View
      style={{
        backgroundColor: 'grey',
        flex: 1,
        padding: 20,
        paddingBottom: 20,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          paddingBottom: 20,
          fontSize: 40,
        }}>
        Welcome
      </Text>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 20,
            paddingBottom: 20,
            fontSize: 20,
            alignSelf: 'center',
          }}>
          The rules of the game :
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 20,
            paddingBottom: 20,
            fontSize: 20,
            alignSelf: 'center',
          }}>
          There are 15 questions on 1 000 000 scraps.
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 20,
            paddingBottom: 20,
            fontSize: 20,
            alignSelf: 'center',
          }}>
          You have three jokers:
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 20,
            paddingBottom: 20,
            fontSize: 20,
            alignSelf: 'center',
          }}>
          1: Help from the survivors!
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 20,
            alignSelf: 'center',
            paddingBottom: 20,
            fontSize: 20,
          }}>
          2: 50/50 (eliminates two wrong answers)
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 20,
            alignSelf: 'center',
            paddingBottom: 20,
            fontSize: 20,
          }}>
          3: Call team partners !
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={{
            marginTop: 100,
            backgroundColor: 'coral',
            alignItems: 'center',
            padding: 12,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          onPress={handlerTheGame}>
          <Text style={{color: 'white', fontSize: 18}}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameScreen;

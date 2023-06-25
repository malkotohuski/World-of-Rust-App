import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

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
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{fontWeight: 'bold', alignContent: 'flex-start'}}>
        Wellcome :
      </Text>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={{fontWeight: 'bold', marginTop: 20}}>
          The rules of the game :
        </Text>
        <Text style={{fontWeight: 'bold', marginTop: 20}}>
          There are 15 questions on 1 000 000 scraps.
        </Text>
        <Text style={{fontWeight: 'bold', marginTop: 20}}>
          You have three jokers:
        </Text>
        <Text
          style={{fontWeight: 'bold', marginTop: 20, alignItems: 'flex-start'}}>
          1: Help from the survivors!
        </Text>
        <Text
          style={{fontWeight: 'bold', marginTop: 20, alignItems: 'flex-start'}}>
          2: 50/50 (eliminates two wrong answers)
        </Text>
        <Text
          style={{fontWeight: 'bold', marginTop: 20, alignItems: 'flex-start'}}>
          3: Call team partners !
        </Text>
      </View>
      <Icon name={'menu'} size={36} color={'#000'} />
      <Icon name={'male'} size={56} />
      <View>
        <Button color={'coral'} title="Start" onPress={handlerTheGame} />
      </View>
    </View>
  );
};

export default GameScreen;

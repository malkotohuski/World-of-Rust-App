import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/styles';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegistration = () => {
    navigation.navigate('Register');
    // Logic for registration button press
    console.log('Registration button pressed');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismiss keyboard');
      }}>
      <View style={styles.loginPage}>
        <Text style={styles.loginBar}></Text>
        <TextInput
          style={styles.emailBar}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.passwordBar}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.buttons}>
          <Button title="Login" onPress={handleLogin} />
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>
            I dont have an account
          </Text>
          <Button title="Register" onPress={handleRegistration} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

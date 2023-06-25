import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

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
    <View style={{backgroundColor: 'grey', flex: 1, padding: 20}}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log('dismiss keyboard');
        }}>
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View>
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
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={{
                backgroundColor: 'coral',
                alignItems: 'center',
                padding: 12,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#fff',
              }}
              onPress={handleLogin}>
              <Text style={{color: 'white', fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'coral',
                alignItems: 'center',
                padding: 12,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#fff',
                marginTop: 20,
              }}
              onPress={handleRegistration}>
              <Text style={{color: 'white', fontSize: 18}}>
                I dont have an account
              </Text>
            </TouchableOpacity>
            {/* <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginTop: 20,
                fontSize: 20,
              }}>
              I dont have an account
            </Text> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

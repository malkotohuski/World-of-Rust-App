import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import styles from '../../styles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Register() {
  const navigation = useContext(NavigationContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [configPassword, setConfigPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [configPasswordError, setConfigPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Login');
    // Logic for registration button press
    console.log('Registration button pressed');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Config:', configPassword);
  };

  const handleSubmit = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!configPassword) {
      setConfigPasswordError(true);
    } else {
      setConfigPasswordError(false);
    }

    if (name && email && password && configPassword) {
      if (password !== configPassword) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);
        navigation.navigate('Game', {userName: name});

        console.log('Submitted');
      }
    }
  };

  return (
    <View style={{backgroundColor: 'grey', flex: 1, padding: 20}}>
      <Text style={styles.welcomeText}>Sing Up</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log('Dismissed keyboard');
        }}>
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View>
            <Text style={styles.loginBar}></Text>
            <TextInput
              style={[styles.nameBar, nameError && styles.error]}
              placeholder="Username"
              value={name}
              onChangeText={text => setName(text)}
            />

            <TextInput
              style={[styles.emailBar, emailError && styles.error]}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            {emailError && <Text></Text>}

            <TextInput
              style={[styles.passwordBar, passwordError && styles.error]}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            {passwordError && <Text></Text>}

            <TextInput
              style={[styles.configBar, configPasswordError && styles.error]}
              placeholder="ConfigPassword"
              secureTextEntry={true}
              value={configPassword}
              onChangeText={text => setConfigPassword(text)}
            />
            {configPasswordError && <Text></Text>}
            {passwordMatchError && (
              <Text style={styles.errorText}>Passwords do not match</Text>
            )}
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
              onPress={handleSubmit}>
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
              onPress={handleLogin}>
              <Text style={{color: 'white', fontSize: 18}}>I have account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

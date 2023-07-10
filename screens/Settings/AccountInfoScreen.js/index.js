import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AccountInfoScreen = ({route, navigation}) => {
  const {
    profilePicture,
    profileName,
    profileAddress,
    setProfilePicture,
    setProfileName,
    setProfileAddress,
  } = route.params;

  const [newProfilePicture, setNewProfilePicture] = useState(profilePicture);
  const [newProfileName, setNewProfileName] = useState(profileName);
  const [newProfileAddress, setNewProfileAddress] = useState(profileAddress);

  const saveChanges = () => {
    setProfilePicture(newProfilePicture);
    setProfileName(newProfileName);
    setProfileAddress(newProfileAddress);

    console.log('New Profile Picture:', newProfilePicture);
    console.log('New Profile Name:', newProfileName);
    console.log('New Profile Address:', newProfileAddress);

    navigation.navigate('Settings', {
      newProfilePicture,
      newProfileName,
      newProfileAddress,
    });
    // Navigate back to the Settings screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Profile Picture:</Text>
      <TextInput
        style={styles.input}
        value={newProfilePicture}
        onChangeText={setNewProfilePicture}
      />

      <Text style={styles.label}>Profile Name:</Text>
      <TextInput
        style={styles.input}
        value={newProfileName}
        onChangeText={setNewProfileName}
      />

      <Text style={styles.label}>Profile Address:</Text>
      <TextInput
        style={styles.input}
        value={newProfileAddress}
        onChangeText={setNewProfileAddress}
      />

      <TouchableOpacity style={styles.button} onPress={saveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AccountInfoScreen;

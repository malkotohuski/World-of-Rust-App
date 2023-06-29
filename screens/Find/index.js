import {useState, React} from 'react';
import styles from '../../styles/styles';
import {Button, View, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FindScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    // Redirect to page with the same name
    navigation.navigate(searchTerm);
  };

  return (
    <View style={styles.FindStyles}>
      <TextInput
        onChangeText={setSearchTerm}
        placeholder="useless placeholder"
        value={searchTerm}
      />
      <Text>Find</Text>
      <Button title="Click Here" onPress={handleSearch} />
    </View>
  );
};

export default FindScreen;


import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';


const LanguageSelectionScreen = ({ navigation, route }) => {
    const { onSelectLanguage } = route.params;

    const languages = ['German', 'English', 'French', 'Italian'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Language</Text>
            <FlatList
                data={languages}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.languageItem}
                        onPress={() => {
                            onSelectLanguage(item);
                            navigation.navigate('Settings'); // Navigate back to Settings after selecting a language
                        }}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    languageItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default LanguageSelectionScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchSelector from "react-native-switch-selector";

const LanguageSelectionScreen = ({ navigation, route }) => {
    // Look up the function based on the passed identifier
    const onSelectLanguageId = route.params.onSelectLanguageId;

    // Function to handle language selection
    const onSelectLanguage = (language) => {
        // Your existing logic for onSelectLanguage
        console.log(`Selected language: ${language}`);
        navigation.navigate('Settings'); // Navigate back to Settings after selecting a language
    };

    const languages = [
        { label: 'English', value: 'English' },
        { label: 'German', value: 'German' },
        { label: 'French', value: 'French' },
        { label: 'Italian', value: 'Italian' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Language</Text>
            <SwitchSelector
                options={languages}
                initial={0}
                onPress={(value) => onSelectLanguage(value)}
                buttonColor="#007AFF"
                textStyle={styles.switchTextStyle}
                selectedTextStyle={styles.selectedTextStyle}
                backgroundColor="#fff" // Change the background color for better visibility
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    switchTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.5)', // Adjust the transparency (last value) as needed
    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default LanguageSelectionScreen;

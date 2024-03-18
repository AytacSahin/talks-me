import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const handlePress = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome Back!</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handlePress('ChatMainPage')} style={styles.button}>
                    <Text style={styles.buttonText}>TalksMe</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: '#1F1F1F',
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default LoginScreen;

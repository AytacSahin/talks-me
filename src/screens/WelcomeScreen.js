import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handlePress = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text style={styles.mainText}>TalksMe</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handlePress('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Register')} style={styles.button}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        backgroundColor: '#075E54',
        justifyContent: 'flex-end',
        width: '100%',
        height: '60%',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    mainText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        lineHeight: 100
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 20,
    },

    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default WelcomeScreen;

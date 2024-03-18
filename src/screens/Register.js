import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Register</Text>
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
});

export default RegisterScreen;

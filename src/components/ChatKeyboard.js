import React, { useState } from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ChatKeyboard = ({ sendMessage }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            sendMessage({ text: inputText, sender: 'user' });
            setInputText('');
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={inputText}
                    onChangeText={handleInputChange}
                    onSubmitEditing={handleSendMessage} // Enter tuşuna basıldığında mesajı gönder
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <MaterialIcons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC',
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    sendButton: {
        width: 40,
        height: 40,
        backgroundColor: '#075E54',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 5,
    },
});

export default ChatKeyboard;

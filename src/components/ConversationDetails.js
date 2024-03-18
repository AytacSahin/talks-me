import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

const ConversationDetails = ({ route }) => {
    const { conversation } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{conversation.name}</Text>
            </View>

            <FlatList
                data={conversation.messages}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <View style={[styles.messageBox, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
                            <Text style={styles.messageText}>{item.sender}: {item.text}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.messageList}
                inverted
            />

            <TouchableOpacity style={styles.newMessageButton}>
                <Text style={styles.newMessageButtonText}>Yeni Mesaj</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: '#075E54',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 50,
    },
    messageList: {
        flexGrow: 1,
        paddingHorizontal: 10,
    },
    messageContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    messageBox: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#ECEFF1',
    },
    messageText: {
        color: 'black',
    },
    newMessageButton: {
        height: 60,
        backgroundColor: '#075E54',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newMessageButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ConversationDetails;

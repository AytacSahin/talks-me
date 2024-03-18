import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import conversations from '../data/conversationData';

const ChatMainPage = ({ navigation }) => {

    const handleConversationPress = (conversation) => {
        navigation.navigate('ConversationDetails', { conversation });
    };

    // <TouchableOpacity style={styles.conversationItem} onPress={() => handleConversationPress(item)}>
    //     <Text style={styles.conversationName}>{item.name}</Text>
    //     <Text>{item.messages[item.messages.length - 1]}</Text>
    // </TouchableOpacity>

    const renderConversationItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.conversationItem} onPress={() => handleConversationPress(item)}>
                <Text style={styles.conversationName}>{item.name}</Text>
                <Text style={styles.lastMessageText}>
                    <Text style={styles.sender}>{item.messages[item.messages.length - 1].sender}: </Text>
                    {item.messages[item.messages.length - 1].text}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {/* Başlık Çubuğu */}
            <View style={styles.header}>
                <Text style={styles.headerText}>TalksMe</Text>
            </View>

            {/* Konuşma Listesi */}
            <FlatList
                data={conversations}
                renderItem={renderConversationItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.conversationList}
            />

            {/* Yeni Mesaj Oluşturma Düğmesi */}
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
        lineHeight: 50
    },
    conversationList: {
        flexGrow: 1,
    },
    conversationItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CED0CE',
    },
    conversationName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
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
    lastMessageText: {
        color: '#555',
        fontSize: 14,
    },
});

export default ChatMainPage;

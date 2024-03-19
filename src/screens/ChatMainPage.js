import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useMyContext } from '../../Context';
import { useNavigation } from '@react-navigation/native';

const ChatMainPage = () => {

    const { conversations } = useMyContext();

    const navigation = useNavigation();

    const handleConversationPress = (conversation, id) => {
        navigation.navigate('ConversationDetails', { conversation, id });
    };

    const renderConversationItem = ({ item }) => {
        let initials = item.name.split(' ')[0].slice(0, 2).toUpperCase();
        // Eğer isim sadece bir kelimeden oluşuyorsa
        if (item.name.split(' ').length === 1) {
            initials = item.name.slice(0, 2).toUpperCase();
        }
        let lastMessage = item.messages[0].text.substring(0, 45);
        if (item.messages[0].text.length > 50) {
            lastMessage += '...';
        }

        return (
            <TouchableOpacity style={styles.conversationItem} onPress={() => handleConversationPress(item, item.id)}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{initials}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.conversationName}>{item.name}</Text>
                    <Text style={styles.lastMessageText}>
                        <Text style={styles.sender}>{item.messages[0].sender}: </Text>
                        {lastMessage}
                    </Text>
                </View>
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
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CED0CE',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#075E54',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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

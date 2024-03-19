import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMyContext } from '../../Context';
import ChatKeyboard from './ChatKeyboard';
import { MaterialIcons } from '@expo/vector-icons'; // MaterialIcons eklendiğinden emin olun

const ConversationDetails = ({ route }) => {
    const { conversation, id } = route.params;

    const navigation = useNavigation();
    const { conversations, handleChangeConversations } = useMyContext();

    // Mesaj listesini ve güncelleme tetikleyici değişkeni tanımla
    const [messages, setMessages] = useState(conversation.messages);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setMessages(conversations.find(conv => conv.id === id).messages);
    }, [conversations, id]);

    const goBack = () => {
        navigation.goBack();
    };

    const sendMessage = (message) => {
        const updatedConversations = conversations.map((conv) => {
            if (conv.id === id) {
                return {
                    ...conv,
                    messages: [message, ...conv.messages],
                };
            }
            return conv;
        });
        handleChangeConversations(updatedConversations);
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={goBack}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{conversation.name}</Text>
            </View>

            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userContainer : styles.otherContainer]}>
                        <View style={[styles.messageBox, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
                            <Text style={styles.messageText}>{item.sender}: {item.text}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.messageList}
                inverted
                extraData={refresh} // Ekstra veriyi refresh değişkeni ile ilişkilendir
            />

            <ChatKeyboard sendMessage={sendMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        width: 30,
        height: 30,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    backText: {
        color: '#075E54',
        fontSize: 20,
        fontWeight: '600',

    },
    header: {
        height: 100,
        backgroundColor: '#075E54',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
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
        alignSelf: 'flex-start', // Sol üst köşeden hizala
    },
    userContainer: {
        alignSelf: 'flex-end', // Sağ üst köşeden hizala
    },
    messageBox: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    userMessage: {
        backgroundColor: '#DCF8C6',
    },
    otherMessage: {
        backgroundColor: '#ECEFF1',
    },
    messageText: {
        color: 'black',
    },
    input: {
        height: 60,
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 5,
        borderTopColor: '#CCCCCC',
    },
});

export default ConversationDetails;

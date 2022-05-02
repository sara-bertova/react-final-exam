import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { fetchChatrooms } from '../store/actions/ChatActions';

const ChatScreen = ({ navigation }: { navigation: any }) => {
    const [text, onChangeText] = useState('');

    const dispatch = useDispatch();
    const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    console.log("chatrooms", chatrooms);

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity 
            style={styles.one_chat} 
            onPress={() => navigation.navigate('OneChatroom', {
                chatId: item.id,
                chatName: item.title,
            })}>

            <Image  
                style={styles.chat_image}
                source={require('./../assets/chat-img/chat-img-bg.png')}
            />
            <View style={styles.chat_content}>
                <Text style={styles.chat_title}>{item.title}</Text>
                <Text style={styles.chat_text}>Thank you for your mess...</Text>
            </View>
            <View>
                <Text>9:43</Text>
            </View>
        </TouchableOpacity>
    );


    return (

        <View>
            { chatrooms.length == 0 ? 
                <View style={styles.nochats_wrapper}>
                    <Image  
                        style={styles.nochat_image}
                        source={require('./../assets/no-chats/no-chats.png')}
                    />
                    <Text style={styles.nochat_title}>No chats</Text>
                    <Text style={styles.nochat_text}>You can start a new chat by reaching out to a student organisation.</Text>
                </View> : 
                <View>
                    <FlatList data={chatrooms} renderItem={renderItem} />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    nochats_wrapper: {
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nochat_image: {
        height: 75,
        width: 223,
    },
    nochat_title: {
        color: '#333333',
        fontSize: 26,
        marginTop: 14,
    },
    nochat_text: {
        width: 260,
        color: '#AAAAAA',
        fontSize: 12,
        marginTop: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    one_chat: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 19,
        marginTop: 24,
    },
    chat_image: {
        height: 50,
        width: 48,
        backgroundColor: '#ffffff',
        shadowColor: '#AAAAAA29',
        shadowOffset: {width: -1, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: 400/ 2,
    },
    chat_content: {
        width: 220,
        marginHorizontal: 14,
        color: '#707070',
    },
    chat_title: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    chat_text: {
    },
});

export default ChatScreen;
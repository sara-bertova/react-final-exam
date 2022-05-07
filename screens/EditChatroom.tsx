import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { addChatroom, deleteChatroom, fetchChatrooms } from '../store/actions/ChatActions';

const AddChatroomScreen = ({ navigation }: { navigation: any }) => {
    const [text, onChangeText] = useState('');

    const dispatch = useDispatch();
    const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.one_chat}>
            <Image  
                style={styles.chat_image}
                source={require('./../assets/chat-img/chat-img-bg.png')}
            />
            <View style={styles.chat_content}>
                <Text style={styles.chat_title}>{item.title}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => dispatch(deleteChatroom(item.id))}>
                    <View>
                        <Image  
                        style={styles.close_image}
                        source={require('./../assets/icons8-close_window/close.png')} />
                    </View>
                </TouchableHighlight>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            
            <View style={styles.addchat_wrapper}>
                <View style={styles.addchat}>
                    <TextInput placeholder="Add chatroom name"
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text} />

                    <Button color="#5050A5" title='Add' onPress={() => dispatch(addChatroom(text))} />
                </View>
                <Text style={styles.cancel_btn} onPress={() => navigation.navigate('ChatScreen')}>Cancel</Text>
            </View>

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
    addchat_wrapper: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 30,
        alignItems: 'center',
        shadowColor: '#AAAAAA29',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    addchat: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 36,
        width: 270,
        marginLeft: 12,
        marginVertical: 12,
        padding: 10,
        fontSize: 12,
        backgroundColor: '#EEEEEE',
    },
    cancel_btn: {
        marginRight: 12,
        color: '#333333',
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
    close_image: {
        height: 20,
        width: 20,
    },
});

export default AddChatroomScreen;
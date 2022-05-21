import { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatrooms, sendMessage } from '../store/actions/ChatActions';
import Moment from 'moment';

const OneChat = ({ route }) => {

    const { chatId, chatName } = route.params;
    const [text, onChangeText] = useState('')
    
    const dispatch = useDispatch();
    const chatroom = useSelector(state => state.chat.chatrooms.filter(chatroom => chatroom.id == chatId));
    const messages = chatroom[0].chatmessages

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    const resetInputField = () => {
        onChangeText('');
    };

    return (
        <View style={styles.container}>

            <ScrollView style={styles.messages}>
                {
                    messages != undefined ? Object.keys(messages).map((keyName, i) => ( 
                        <View key={i} style={styles.chatmsg_wrapper}>
                            <Text key={messages[keyName].text}
                                style={styles.chatmsg}>{messages[keyName].text}</Text>
                            <Text key={messages[keyName].timestamp} style={styles.msg_time}>
                                {Moment(messages[keyName].timestamp).format('h:mm a')}
                            </Text>
                        </View>
                    )) : 
                    <View style={styles.nochats_wrapper}>
                        <Image  
                            style={styles.nochat_image}
                            source={require('./../assets/no-chats/no-chats.png')}
                        />
                        <Text style={styles.nochat_title}>No chat messages</Text>
                        <Text style={styles.nochat_text}>BE the first one to start the conversation</Text>
                    </View>
                }
            </ScrollView>

            <View style={styles.chatbox_wrapper}>
                <View style={styles.chatbox}>

                    <Image  
                        style={styles.chat_image}
                        source={require('./../assets/emma/emma-101.png')}
                    />
     
                    <TextInput placeholder="Write message"
                        multiline
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text} />

                    <TouchableOpacity style={styles.button} 
                                      onPress={
                                            () => { dispatch(sendMessage(chatId, text)); resetInputField()}
                                      }>
                        <Image
                            source={require('./../assets/icons8-email_send.png')}
                        />
                    </TouchableOpacity>
                
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    container: {
        flex: 1,
    },
    chat_image: {
        width: 50,
        height: 50,
    },
    chatbox_wrapper: {
        backgroundColor: 'white',
        padding: 12,
        justifyContent: 'space-between',
    },
    chatbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: 245,
        marginHorizontal: 12,
        marginVertical: 12,
        padding: 10,
        fontSize: 12,
        backgroundColor: '#EEEEEE',
    },
    messages: {
         flex: 1,
    },
    chatmsg_wrapper: {
        marginHorizontal: 20,
        marginVertical: 7,
        alignItems: 'flex-end',
    },
    chatmsg: {
        backgroundColor: '#5050A5',
        color: '#ffffff',
        padding: 10,
        alignSelf: 'flex-end',
        maxWidth: 200,
        borderRadius: 10,
    },
    msg_time: {
        fontSize: 12,
    },
    button: {
        backgroundColor: '#5050A5',
        padding: 12,
        borderRadius: 5,
    },
    disabled: {
        backgroundColor: '#BABADD',
        padding: 12,
        borderRadius: 5,
    },
})

export default OneChat;
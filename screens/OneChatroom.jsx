import { useEffect, useState } from 'react';
import { View, Button, TextInput, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatrooms, sendMessage } from '../store/actions/ChatActions';
import Moment from 'moment';

const OneChat = ({ route, navigation }) => {

    const { chatId, chatName } = route.params;
    const [text, onChangeText] = useState('')

    const dispatch = useDispatch();
    const chatroom = useSelector(state => state.chat.chatrooms.filter(chatroom => chatroom.id == chatId));
    const messages = chatroom[0].chatmessages

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    // console.log('*************** ', messages)

    return (
        <View style={styles.container}>

            <ScrollView style={styles.messages}>
                {Object.keys(messages).map((keyName, i) => ( 
                    <View style={styles.chatmsg_wrapper}>
                        <Text key={messages[keyName].text}
                            style={styles.chatmsg}>{messages[keyName].text}</Text>
                        <Text key={messages[keyName].timestamp} style={styles.msg_time}>{Moment(messages[keyName].timestamp).format('h:mm a')}</Text>
                    </View>
                ))}
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

                    <Button color="#5050A5" title='Send' onPress={() => dispatch(sendMessage(chatId, text))} />
                
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
})

export default OneChat;
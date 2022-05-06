import { useEffect, useState } from 'react';
import { View, Button, TextInput, StyleSheet, Image, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatrooms, sendMessage } from '../store/actions/ChatActions';

const OneChat = ({ route, navigation }) => {

    const { chatId, chatName } = route.params;
    const [text, onChangeText] = useState('')
    const [msgArr, setMsgArr] = useState([])

    const dispatch = useDispatch();
    const chatroom = useSelector(state => state.chat.chatrooms.filter(chatroom => chatroom.id == chatId));
    const messages = chatroom[0].chatmessages

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    // console.log('*************** ', messages)

    return (
        <View>
            {/* <View>
                <FlatList data={messages} renderItem={renderItem} />
            </View> */}

            
            {Object.keys(messages).map((keyName, i) => (
                // <Text>{messages[keyName].text} {messages[keyName].timestamp}</Text>
                <View>
                    <Text>{messages[keyName].text}</Text>
                    <Text>{messages[keyName].timestamp}</Text>
                </View>
            ))}

            <View style={styles.chatbox_wrapper}>
                <View style={styles.chatbox}>

                    <Image  
                        style={styles.chat_image}
                        source={require('./../assets/chat-img/chat-img-sm.png')}
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
    chatbox_wrapper: {
        backgroundColor: 'white',
        padding: 12,
        justifyContent: 'space-between'
    },
    chatbox: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    input: {
        height: 44,
        width: 265,
        marginHorizontal: 12,
        marginVertical: 12,
        padding: 10,
        fontSize: 12,
        backgroundColor: '#EEEEEE',
    },
})

export default OneChat;
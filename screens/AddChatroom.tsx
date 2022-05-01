import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
        <TouchableOpacity>
            <Text>{item.title}</Text>
            <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.id))} />
        </TouchableOpacity>
    );

    return (
        <View>
            
            <View>
                <TextInput placeholder="Chatroom name"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text} />

                <Button title='Add chatroom' onPress={() => dispatch(addChatroom(text))} />
            </View>

            { chatrooms.length == 0 ? 
                <Text> No chatrooms yet </Text> : 
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
});

export default AddChatroomScreen;
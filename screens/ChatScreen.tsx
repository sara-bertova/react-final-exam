import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { deleteChatroom, fetchChatrooms } from '../store/actions/ChatActions';

const Screen1 = ({ navigation }: { navigation: any }) => {
    const [text, onChangeText] = useState('');

    const dispatch = useDispatch();
    const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    console.log("chatrooms", chatrooms);

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity>
            <Text>{item.title}</Text>
            <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.id))} />
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
        flex: 1,
        marginTop: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nochat_image: {
        height: 75,
        width: 223,
    },
    nochat_title: {},
    nochat_text: {},
});

export default Screen1;
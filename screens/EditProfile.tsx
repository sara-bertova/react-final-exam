import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { updateUser } from '../store/actions/UserActions';

const AddChatroomScreen = ({ navigation }: { navigation: any }) => {
    const [text, onChangeText] = useState('');

    const dispatch = useDispatch();

    return (
        <View>
            
            <View style={styles.addchat_wrapper}>
                <View style={styles.addchat}>
                    <TextInput placeholder="Name"
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text} />

                    <Button color="#5050A5" title='Add' onPress={() => dispatch(updateUser(text))} />
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    addchat_wrapper: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 30,
        alignItems: 'center',
        marginTop: 40,
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
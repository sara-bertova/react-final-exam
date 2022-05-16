import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, restoreUser } from '../store/actions/UserActions';
import { useNavigation } from '@react-navigation/native';
import Input from './../components/Input';
import qs from 'qs';
import { Linking } from 'react-native';

const SendEmailScreen = ({route, navigation}) => {

    const { email } = route.params;

    const [subject, onChangeSubject] = useState('');
    const [body, onChangeBody] = useState('');

    const [validSubject, setValidSubject] = useState(subject !== '')
    const [validBody, setValidBody] = useState(body !== '')

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>What's on your mind?</Text>

            <Input
                label="Subject"
                placeholder='Enter the subject of your message'
                inputValue={subject}
                error="Subject cannot be empty"
                valid={validSubject}
                setValid={setValidSubject}
                setText={onChangeSubject}
            />

            <Input style={styles.textarea}
                label="Your enquiry"
                placeholder='Write your message'
                inputValue={body}
                error="Message cannot be empty"
                valid={validBody}
                setValid={setValidBody}
                setText={onChangeBody}
            />

            {/* <View style={styles.inputContainer}>
                <Text style={styles.label2}>Subject</Text>
                <TextInput style={styles.input} 
                        value={subject} 
                        onChangeText={onChangeSubject} 
                        placeholder='' 
                        placeholderTextColor="#BABADD" />
            </View> */}

            {/* <View style={styles.inputContainer}>
                <Text style={styles.label2}>Your enquiry</Text>
                <TextInput style={[styles.input, styles.textArea]} 
                        multiline
                        editable
                        maxLength={500}
                        value={body} 
                        onChangeText={onChangeBody} 
                        placeholder='Your enquiry' 
                        placeholderTextColor="#BABADD" />
            </View> */}
            
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`)}>
                <Text style={styles.buttonText}>Send email</Text>
            </TouchableOpacity>        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#5050A5',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginVertical: 30,
    },
    checkbox: {
        alignSelf: "center",
        width: 27,
        height: 27,
    },
    label: {
        margin: 8,
    },
    label2: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#32305D',
    },
    inputContainer: {
        height: 70,
        borderWidth: 1,
        padding: 10,
        borderColor: '#EEEEEE',
    },
    input: {
        height: 35,
        fontSize: 16,
    },
    textarea: {
        height: 100,
        marginBottom: 20,
    },
    heading: {
        color: '#32305D',
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 22,
    },
    image: {
        width: 114,
        height: 114,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    link: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5050A5', 
        marginTop: 30,
        marginBottom: 50,
    },
    text: {
        textAlign: 'center',
        color: '#5050A5', 
        marginTop: 36,
    }
});

export default SendEmailScreen;
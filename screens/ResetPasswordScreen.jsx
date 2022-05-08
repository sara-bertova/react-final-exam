import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, restoreUser } from '../store/actions/UserActions';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reset password</Text>
            <Text style={styles.text}>If you do not know your current password, you can change it.</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>E-mail</Text>
                <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="#BABADD" 
                    style={styles.input} 
                    onChangeText={onChangeEmail}
                    value={email} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(login(email, password))}>
                <Text style={styles.buttonText}>Reset</Text>
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
        color: '#333333', 
        marginTop: 0,
        fontSize: 16,
    }
});

export default LoginScreen;
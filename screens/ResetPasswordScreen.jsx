import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Input from './../components/Input';

const LoginScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState('');
    const [validEmail, setValidEmail] = useState(email !== '')

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reset password</Text>
            <Text style={styles.text}>If you do not know your current password, you can change it.</Text>

            <Input
                    label="E-mail"
                    placeholder='E-mail'
                    inputValue={email}
                    error="Email cannot be empty"
                    valid={validEmail}
                    setValid={setValidEmail}
                    setText={onChangeEmail}
                />
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResetPasswordEmail')}>
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
        marginTop: 45, 
        marginBottom: 40,
    },
    input: {
        height: 35,
        fontSize: 16,
    },
    heading: {
        color: '#32305D',
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 5,
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
        marginBottom: 16,
    }
});

export default LoginScreen;
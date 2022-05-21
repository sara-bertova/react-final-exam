import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, restoreUser } from '../store/actions/UserActions';
import Input from './../components/Input';

const LoginScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
 
    const [validEmail, setValidEmail] = useState(email !== '')
    const [validPassword, setValidPassword] = useState(password !== '')

    const dispatch = useDispatch();

    // async function load() {
    //     let emailFromSecureStore = await SecureStore.getItemAsync('email');
    //     let tokenFromSecureStore = await SecureStore.getItemAsync('token');
    //     if (emailFromSecureStore && tokenFromSecureStore) {
    //         console.log("success", emailFromSecureStore);

    //         dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));

    //     } else {
    //         console.log("failure");
    //     }
    // }

    
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/logo2.png')}
            />
            <Text style={styles.heading}>Login</Text>
            <Input
                    label="E-mail"
                    placeholder='E-mail'
                    inputValue={email}
                    error="Email cannot be empty"
                    valid={validEmail}
                    setValid={setValidEmail}
                    setText={onChangeEmail}
                />
            <Input
                    label="Password"
                    placeholder='Password'
                    inputValue={password}
                    error="Password cannot be empty"
                    valid={validPassword}
                    setValid={setValidPassword}
                    setText={onChangePassword}
                    secureEntry={true}
                />
    
            <Text style={styles.link} onPress={() => navigation.navigate('ResetPassword')}>Forgot password?</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => dispatch(login(email, password))}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>Sign up</Text></Text>

            
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
        textAlign: 'center',
        color: '#5050A5', 
        marginTop: 36,
    }
});

export default LoginScreen;
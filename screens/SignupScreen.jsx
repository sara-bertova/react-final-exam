import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import CheckBox from "expo-checkbox";
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../store/actions/UserActions';

import { useNavigation } from '@react-navigation/native';
import Input from './../components/Input';

const SignupScreen = ({navigation}) => {
    // const navigation = useNavigation();

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [repeatPassword, onChangeRepeatPassword] = useState('');

    const [agree, setAgree] = useState(false);

    // const email = useSelector(state => state.user.email);
    // const [validEmail, setValidEmail] = useState(email !== '')

    // const password = useSelector(state => state.user.password);
    // const [validPassword, setValidPassword] = useState(password !== '')
    // console.log(password);

    // const repeatPassword = useSelector(state => state.user.repeatPassword);
    // const [validRepPassword, setValidRepPassword] = useState(repeatPassword !== '')

    // const dispatch = useDispatch();

    // const users = useSelector(state => state.user.idToken);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/logo2.png')}
            />
            <Text style={styles.heading}>Sign up to get access</Text>
            {/* <Input
                    label="E-mail"
                    placeholder='E-mail'
                    inputValue={email}
                    error="Email cannot be empty"
                    valid={validEmail}
                    setValid={setValidEmail}
                /> */}
            {/* <Input
                    label="Password"
                    placeholder='Password'
                    inputValue={password}
                    error="Password cannot be empty"
                    valid={validPassword}
                    setValid={setValidPassword}
                    // secureEntry={true}
                /> */}
            {/* <Input
                    label="Repeat Password"
                    placeholder='Repeat password'
                    inputValue={repeatPassword}
                    error="You must confirm your password"
                    valid={validRepPassword}
                    setValid={setValidRepPassword}
                    secureEntry={true}
                /> */}
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>E-mail</Text>
                <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="#BABADD" 
                    style={styles.input} 
                    onChangeText={onChangeEmail}
                    value={email} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>Password</Text>
                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="#BABADD" 
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    secureTextEntry={true} />
            </View> 
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>Repeat Password</Text>
                <TextInput 
                    placeholder="Repeat password" 
                    placeholderTextColor="#BABADD" 
                    style={styles.input}
                    onChangeText={onChangeRepeatPassword}
                    value={repeatPassword}
                    secureTextEntry={true} />
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#32305D" : undefined}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>I agree to the <Text style={styles.link2}>terms and conditions</Text></Text>
            </View>
            {/* <Button title='Get access' disabled={!agree}
                    onPress={() => dispatch(signup(email, password, repeatPassword))}  color="#5050A5"/> */}
            <TouchableOpacity style={styles.button} disabled={!agree} onPress={() => navigation.navigate('VerifyEmail', {
                email: email, 
                password: password, 
                repeatPassword: repeatPassword,
            })}>
                <Text style={styles.buttonText}>Get access</Text>
            </TouchableOpacity>
            {/* <Button title='Verify email'
                    onPress={() => navigation.navigate('VerifyEmail')}  color="#5050A5"/> */}
            <Text style={styles.text}>Already have a user? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Log in</Text></Text>
            {/* <Button title="Already have an account? Log in" 
                    onPress={() => navigation.navigate('Login')} color="#5050A5"/> */}
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
    },
    link2: {
        textDecorationLine: 'underline',
    },
    text: {
        textAlign: 'center',
        color: '#5050A5', 
        marginTop: 36,
    }
});

export default SignupScreen;
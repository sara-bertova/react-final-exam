import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import CheckBox from "expo-checkbox";
import { useState } from 'react';
import Input from './../components/Input';

const SignupScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [repeatPassword, onChangeRepeatPassword] = useState('');

    const [validEmail, setValidEmail] = useState(email !== '')
    const [validPassword, setValidPassword] = useState(password !== '')
    const [validRepPassword, setValidRepPassword] = useState(repeatPassword !== '')

    const [agree, setAgree] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/logo2.png')}
            />
            <Text style={styles.heading}>Sign up to get access</Text>
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
            <Input
                    label="Repeat Password"
                    placeholder='Repeat password'
                    inputValue={repeatPassword}
                    error="You must confirm your password"
                    valid={validRepPassword}
                    setValid={setValidRepPassword}
                    setText={onChangeRepeatPassword}
                    secureEntry={true}
                />

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#32305D" : undefined}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>I agree to the <Text style={styles.link2}>terms and conditions</Text></Text>
            </View>
            
            <TouchableOpacity style={!agree ? styles.disabled : styles.button} disabled={!agree} 
                              onPress={() => {
                                    if ( password != repeatPassword) {
                                        Alert.alert("Passwords do not match")
                                    } else {
                                        navigation.navigate('VerifyEmail', {
                                            email: email, 
                                            password: password
                                        })
                                    }
                            }}>
                <Text style={styles.buttonText}>Get access</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Already have a user? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Log in</Text></Text>
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
    disabled: {
        backgroundColor: '#BABADD',
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
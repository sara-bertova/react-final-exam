import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from './../components/Input';
import { changePassword } from '../store/actions/UserActions';

const ChangePasswordScreen = ({}) => {

    const dispatch = useDispatch();
    
    const [password, onChangePassword] = useState('');
    const [repeatPassword, onChangeRepeatPassword] = useState('');

    const [validPassword, setValidPassword] = useState(password !== '')
    const [validRepPassword, setValidRepPassword] = useState(repeatPassword !== '')

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Change your password</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label2}>Current password</Text>
                <TextInput style={styles.input} 
                        value='*******'
                        editable={false}
                />
            </View>
            
            <Input
                    label="New Password"
                    placeholder='New password'
                    inputValue={password}
                    error="New password cannot be empty"
                    valid={validPassword}
                    setValid={setValidPassword}
                    setText={onChangePassword}
                    secureEntry={true}
                />
            <Input
                    label="Repeat New Password"
                    placeholder='Repeat new password'
                    inputValue={repeatPassword}
                    error="You must confirm your new password"
                    valid={validRepPassword}
                    setValid={setValidRepPassword}
                    setText={onChangeRepeatPassword}
                    secureEntry={true}
                />
 
            <TouchableOpacity style={!repeatPassword && !password ? styles.disabled : styles.button} 
                              disabled={!repeatPassword && !password}
                              onPress={() => {
                                    if ( password != repeatPassword) {
                                        Alert.alert("Passwords do not match")
                                    } else {
                                        dispatch(changePassword(password))
                                    }
                            }}>
                <Text style={styles.buttonText}>Save password</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    disabled: {
        backgroundColor: '#BABADD',
        padding: 20,
        borderRadius: 5,
    },
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
        borderWidth: 2,
        padding: 10,
        borderColor: '#fff',
        marginBottom: 24,
        backgroundColor: '#F5F5F5',
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

export default ChangePasswordScreen;
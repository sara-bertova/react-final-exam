import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, restoreUser } from '../store/actions/UserActions';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const dispatch = useDispatch();

    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email');
        let tokenFromSecureStore = await SecureStore.getItemAsync('token');
        if (emailFromSecureStore && tokenFromSecureStore) {
            console.log("success", emailFromSecureStore);

            dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));

        } else {
            console.log("failure");
        }
    }

//     const users = useSelector(state => state.user.users);
//     const loggedInUser = useSelector( (state: any) => state.user.loggedInUser )

//     const renderItem = ({ item }) => (
//         <Text>You are logged in with email: {item.email}</Text>
//  );

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/logo2.png')}
            />
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>E-mail</Text>
                <TextInput 
                    placeholder="Email" 
                    style={styles.input} 
                    onChangeText={onChangeEmail}
                    value={email} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>Password</Text>
                <TextInput 
                    placeholder="Password" 
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    secureTextEntry={true} />
            </View>
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Forgot password?</Text>
            {/* <Button title='Log in' 
                    onPress={() => dispatch(login(email, password))} color="#5050A5"/> */}
            <TouchableOpacity style={styles.button} onPress={() => dispatch(login(email, password))}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <Button title='Set up profile' 
                    onPress={() => navigation.navigate('SetupProfile')} color="#5050A5"/>
            {/* <FlatList data={loggedInUser} renderItem={renderItem} /> */}

            <Text style={styles.text}>Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>Sign up</Text></Text>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        // marginTop: '30%',
        // flexDirection: "row",
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
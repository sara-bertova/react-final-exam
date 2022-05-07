import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, restoreUser } from '../store/actions/UserActions';

const LoginScreen = () => {

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

    const users = useSelector(state => state.user.users);
    const loggedInUser = useSelector( (state: any) => state.user.loggedInUser )

    const renderItem = ({ item }) => (
        <Text>You are logged in with email: {item.email}</Text>
 );

    return (
        <View>
            <Image
                style={styles.image}
                source={require('./../assets/logo2.png')}
            />
            <Text style={styles.heading}>Login</Text>
            <View>
                <TextInput 
                    placeholder="email" 
                    style={styles.input} 
                    onChangeText={onChangeEmail}
                    value={email} />
                <TextInput 
                    placeholder="password" 
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password} />

                <Button title='Log in' 
                        onPress={() => dispatch(login(email, password))}  />

                <FlatList data={loggedInUser} renderItem={renderItem} />

            </View>
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
});

export default LoginScreen;
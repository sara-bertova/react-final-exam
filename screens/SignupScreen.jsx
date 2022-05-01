import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../store/actions/UserActions';

import { useNavigation } from '@react-navigation/native';

const SignupScreen = ({navigation}) => {
    // const navigation = useNavigation();

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const dispatch = useDispatch();

    const users = useSelector(state => state.user.idToken);

    return (
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

            <Button title='Sign up' 
                    onPress={() => dispatch(signup(email, password))}  />
            <Button title="Already have an account? Log in" 
                    onPress={() => navigation.navigate('Login')} />
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
    button: {
        
    },
});

export default SignupScreen;
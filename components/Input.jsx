import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

const Input = props => {
    const [text, setText] = useState(props.inputValue)
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    const [boolean, setBoolean] = useState(props.secureEntry)

    const [entered, setEntered] = useState(false);

    const handleChangeText = (text) => {
        setEntered(true);
        setPlaceholder(placeholder);
        setBoolean(boolean);
        setText(text);
        if (text === '') {
            props.setValid(false);
        } else {
            props.setValid(true);
        }
    }
    const handleOnBlur = () => {
        setEntered(true);
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label2}>{props.label}</Text>
            <TextInput style={styles.input} value={text} onChangeText={handleChangeText} onBlur={handleOnBlur} placeholder={placeholder} placeholderTextColor="#BABADD" secureTextEntry={boolean}/>
            {!props.valid && entered ? <Text style={styles.error}>{props.error}</Text> : <></>}
        </View>
    );
}

const styles = StyleSheet.create({
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
        borderColor: '#EEEEEE',
        marginBottom: 24,
        backgroundColor: '#fff',
    },
    input: {
        height: 35,
        fontSize: 16,
    },
    error: {
        fontSize: 12,
        color: '#B10024',
        fontWeight: 'bold',
        marginTop: 2,
    }
});

export default Input;
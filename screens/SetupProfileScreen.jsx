import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CheckBox from "expo-checkbox";
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

const SetupProfileScreen = ({navigation}) => {
    // const navigation = useNavigation();

    const [name, onChangeName] = useState('');
    const [programme, onChangeProgramme] = useState('');

    const [agree, setAgree] = useState(false);

    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/logo2.png')}
            />
            <Text style={styles.heading}>Before we start...</Text>
            <View style={styles.profileImgContainer}>
                <View>
                    <Text style={styles.label2}>Profile picture</Text>
                    <TouchableOpacity style={[styles.button, styles.buttonUpload]}>
                        <Text style={styles.buttonText}>Upload</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileImgWrapper}>
                    <Image
                        style={styles.profileImg}
                        source={require('./../assets/setup-profile/icons8-user_account.png')}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>What is your name?</Text>
                <TextInput 
                    placeholder="First name and last name" 
                    placeholderTextColor="#BABADD" 
                    style={styles.input} 
                    onChangeText={onChangeName}
                    value={name} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label2}>Study programme</Text>
                <Text style={styles.modalToggle} onPress={handleModal}>Select from list</Text>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                <Text style={[styles.heading, styles.modalTitle]}>Study programme</Text>
                <TouchableOpacity style={[styles.button, styles.buttonUpload, styles.buttonOkModal]} onPress={handleModal}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
                {/* <Button title="Hide modal" onPress={handleModal} /> */}
                </View>
            </Modal>
            <TouchableOpacity style={styles.button} disabled={!agree} onPress={() => dispatch(signup(email, password, repeatPassword))}>
                <Text style={styles.buttonText}>Next</Text>
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
        marginTop: 68,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
        marginBottom: 24,
    },
    input: {
        height: 35,
        fontSize: 16,
    },
    modalToggle: {
        marginTop: 8,
        color: '#BABADD',
        fontSize: 16,
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: 20,
    }, 
    modalTitle: {
        textAlign: 'center',
    },
    buttonOkModal: {
       alignSelf: 'center',
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
    profileImgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    profileImgWrapper: {
        width: 104,
        height: 104,
        borderWidth: 2,
        borderColor: '#EEEEEE',
        borderRadius: 100,
        justifyContent: 'flex-end',
    },
    profileImg: {
        alignSelf: 'center',
    },
    buttonUpload: {
        height: 37,
        width: 160,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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

export default SetupProfileScreen;
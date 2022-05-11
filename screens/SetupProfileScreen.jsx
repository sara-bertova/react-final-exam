import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import CheckBox from "expo-checkbox";
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
// import RadioGroup from 'react-native-radio-buttons-group';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';

const SetupProfileScreen = ({navigation}) => {
    // const navigation = useNavigation();

    const [name, onChangeName] = useState('');
    const [programme, onChangeProgramme] = useState('');

    const [agree, setAgree] = useState(false);

    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    // const [isSecondSelectVisible, setIsSecondSelectVisible] = useState(false);
    // const handleSecondSelect = () => setIsSecondSelectVisible(() => !isSecondSelectVisible);

    const [shouldShow, setShouldShow] = useState(false);
    const [showRadio, setShowRadio] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    const data = [{
        id: '1', 
        label: 'MSc in Business Administration and E-business',
        value: 'busAdminEbus'
    }, {
        id: '2',
        label: 'MSc in Business Administration and Information Systems',
        value: 'busAdminInform'
    },{
        id: '3',
        label: 'MSc in Business Administration and Data Science',
        value: 'busAdminData'
    },  
]

    // const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    // function onPressRadioButton(radioButtonsArray) {
    //     setRadioButtons(radioButtonsArray);
    // }
    
    return (
        <View style={styles.container}>
            {/* <Image
                style={styles.image}
                source={require('./../assets/logo2.png')}
            /> */}
            {/* <Text style={styles.heading}>Before we start...</Text> */}
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
                        source={require('./../assets/setup-profile/robert.png')}
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
                    <View style={styles.modalHeader}>
                        <Text style={[styles.heading, styles.modalTitle]}>Study programme</Text>
                        <TouchableOpacity style={styles.closeWrapper} onPress={handleModal}>
                            <Image
                                style={styles.image}
                                source={require('./../assets/setup-profile/icons8-close_window.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View>
                            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)} style={[styles.button, styles.modalHeader, styles.select]}>
                                <Text style={styles.buttonText}>Bachelor</Text>
                                {shouldShow ?
                                (
                                <Image
                                    style={styles.image}
                                    source={require('./../assets/setup-profile/icons8-expand_arrow_white_up.png')}
                                /> ) : <Image
                                style={styles.image}
                                source={require('./../assets/setup-profile/icons8-expand_arrow_white_down.png')}
                            /> }
                            </TouchableOpacity>
                            {/* <Modal isVisible={isSecondSelectVisible} > */}
                            {shouldShow ?
                            (
                            <TouchableOpacity onPress={() => setShowRadio(!showRadio)} style={[styles.button, styles.modalHeader, styles.select, styles.selectSecondary]}>
                                <Text style={[styles.buttonText, styles.selectTextSecond]}>IT and Information in Organizations</Text>
                                {showRadio ?
                                (
                                <Image
                                    style={styles.image}
                                    source={require('./../assets/setup-profile/icons8-expand_arrow_black_up.png')}
                                />
                                ) : <Image
                                style={styles.image}
                                source={require('./../assets/setup-profile/icons8-expand_arrow.png')}
                            />}
                            </TouchableOpacity>
                            ) : null}
                            {/* <RadioGroup 
                                radioButtons={radioButtons} 
                                onPress={onPressRadioButton} 
                            /> */}
                            {showRadio ?
                            (
                            <RadioButtonRN
                                data={data}
                                selectedBtn={(e) => console.log(e)}
                                icon={
                                  <Icon
                                    name="check-circle"
                                    size={25}
                                    color="#32305D"
                                  />
                                }
                            />
                            ) : null}
                            {/* </Modal> */}
                        </View>
                        <TouchableOpacity style={[styles.button, styles.modalHeader, styles.select]}>
                            <Text style={styles.buttonText}>Graduate</Text>
                            <Image
                                style={styles.image}
                                source={require('./../assets/setup-profile/icons8-expand_arrow_white_down.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.button, styles.buttonUpload, styles.buttonOkModal]} onPress={handleModal}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                {/* <Button title="Hide modal" onPress={handleModal} /> */}
                </View>
            </Modal>
            <TouchableOpacity style={styles.button} disabled={!agree} onPress={() => dispatch(signup(email, password, repeatPassword))}>
                <Text style={styles.buttonText}>Save changes</Text>
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
        color: '#5050A5',
        textTransform: 'uppercase',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 21,
    },
    select: {
        backgroundColor: '#333333',
        borderRadius: 0,
        marginHorizontal: 0,
        borderBottomColor: '#fff', 
        borderBottomWidth: .5,
        marginTop: 0,
        height: 52,
        padding: 0,
        paddingHorizontal: 19,
        alignItems: 'center',
    },
    selectSecondary: {
        backgroundColor: '#EAEAEA',
    },
    selectTextSecond: {
        color: '#333333',
        fontSize: 12,
    },
    buttonOkModal: {
       alignSelf: 'center',
       margin: 20,
    },
    heading: {
        color: '#32305D',
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 22,
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    profileImgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    closeWrapper: {
        borderRadius: 100,
        backgroundColor: '#EAEAEA',
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    profileImgWrapper: {
        width: 104,
        height: 104,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
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
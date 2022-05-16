import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import CheckBox from "expo-checkbox";
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
// import RadioGroup from 'react-native-radio-buttons-group';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import Input from './../components/Input';
import { updateUser } from '../store/actions/UserActions';

const SetupProfileScreen = ({navigation}) => {

    const [name, onChangeName] = useState('');

    const placeholder = useSelector(state => state.user.username);
    const [username, onChangeUsername] = useState('');
    const [validUsername, setValidUsername] = useState(username !== '')

    const [agree, setAgree] = useState(false);

    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const [shouldShow, setShouldShow] = useState(false);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [showRadio, setShowRadio] = useState(false);
    const [showRadio2, setShowRadio2] = useState(false);


    const bachelorProgrammes = [{
        id: '1', 
        label: 'Professional Bachelor: Crafts in Glass and Ceramics',
        value: 'craftsGlass'
    }, {
        id: '2',
        label: 'Graphic Communication Design',
        value: 'graphicComm'
    },{
        id: '3',
        label: 'Visual Game and Media Design',
        value: 'visualGame'
    },  
]

    const graduateProgrammes = [{
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
    
    return (
        <View style={styles.container}>

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

            <Input
                label="What is your name?"
                inputValue={username}
                placeholder={placeholder}
                error="Username cannot be empty."
                valid={validUsername}
                setValid={setValidUsername}
                setText={onChangeUsername}
            />

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
                            {shouldShow ?
                            (
                            <TouchableOpacity onPress={() => setShowRadio(!showRadio)} style={[styles.button, styles.modalHeader, styles.select, styles.selectSecondary]}>
                                <Text style={[styles.buttonText, styles.selectTextSecond]}>Architecture, Design, Conservation</Text>
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
                            {showRadio ?
                            (
                            <RadioButtonRN
                                data={bachelorProgrammes}
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
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setShouldShow2(!shouldShow2)} style={[styles.button, styles.modalHeader, styles.select]}>
                                    <Text style={styles.buttonText}>Graduate</Text>
                                    {shouldShow2 ?
                                    (
                                    <Image
                                        style={styles.image}
                                        source={require('./../assets/setup-profile/icons8-expand_arrow_white_up.png')}
                                    /> ) : <Image
                                    style={styles.image}
                                    source={require('./../assets/setup-profile/icons8-expand_arrow_white_down.png')}
                                /> }
                                </TouchableOpacity>
                                {shouldShow2 ?
                                (
                                <TouchableOpacity onPress={() => setShowRadio2(!showRadio2)} style={[styles.button, styles.modalHeader, styles.select, styles.selectSecondary]}>
                                    <Text style={[styles.buttonText, styles.selectTextSecond]}>IT and Information in Organizations</Text>
                                    {showRadio2 ?
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
                                {showRadio2 ?
                                (
                                <RadioButtonRN
                                    data={graduateProgrammes}
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
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.button, styles.buttonUpload, styles.buttonOkModal]} onPress={handleModal}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity style={styles.button} onPress={() => dispatch(updateUser(username))}>
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
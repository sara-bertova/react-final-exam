import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Switch} from 'react-native';
import CheckBox from "expo-checkbox";
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

const ProfileScreen = ({ navigation }) => {

    const [name, onChangeName] = useState('');
    // const [programme, onChangeProgramme] = useState('');

    const [agree, setAgree] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    // const [isSecondSelectVisible, setIsSecondSelectVisible] = useState(false);
    // const handleSecondSelect = () => setIsSecondSelectVisible(() => !isSecondSelectVisible);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const email = useSelector(state => state.user.email);
    const username = useSelector(state => state.user.username);
    const programme = useSelector(state => state.user.programme);

    return (
        <View style={styles.container}>

            <View style={styles.profileImgContainer}>
                <View style={styles.profileImgWrapper}>
                    <Image
                        style={styles.profileImg}
                        source={require('./../assets/setup-profile/robert.png')}
                    />
                </View>
                <View style={styles.profileTextWrapper}>
                    <Text style={styles.name}>{username}</Text>
                    <Text style={styles.profileInfo}>{email}</Text>
                    <Text style={styles.profileInfo}>{programme}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetupProfile')}>
                <Text style={styles.buttonText}>Edit profile</Text>
            </TouchableOpacity>

            <Text style={styles.heading}>Notifications</Text>

            <View style={[styles.logoutButton, styles.toggleBgd]}>
                <View>
                    <Text style={styles.toggleTitle}>Chat</Text>
                    <Text style={styles.toggleText}>When you receive a new message</Text>
                </View>
                <Switch
                    trackColor={{ false: "#AAAAAA", true: "#BABADD" }}
                    thumbColor={isEnabled ? "#5050A5" : "#F5F5F5"}
                    ios_backgroundColor="#F5F5F5"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={[styles.logoutButton, styles.toggleBgd]}>
                <View>
                    <Text style={styles.toggleTitle}>Event reminder</Text>
                    <Text style={styles.toggleText}>An hour before events you are ‘going to’</Text>
                </View>
                <Switch
                    trackColor={{ false: "#AAAAAA", true: "#BABADD" }}
                    thumbColor={isEnabled2 ? "#5050A5" : "#F5F5F5"}
                    ios_backgroundColor="#F5F5F5"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log out</Text>
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
    profileInfo: {
        fontSize: 12,
        color: '#333333',
        marginBottom: 4,
    },
    name: {
        fontSize: 22,
        color: '#32305D',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#5050A5',
        padding: 8,
        borderRadius: 5,
        marginTop: 17,
        marginBottom: 60,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#fff',
        paddingVertical: 19,
        borderRadius: 5,
        marginTop: 60,
    },
    logoutText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#32305D',
    },
    toggleBgd: {
        marginTop: 24,
        paddingVertical: 16,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleTitle: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold'
    },
    toggleText: {
        color: '#707070',
        fontSize: 12,
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
    heading: {
        color: '#32305D',
        fontWeight: 'bold',
        fontSize: 25,
        textTransform: 'uppercase',
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    profileImgContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImgWrapper: {
        width: 104,
        height: 104,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        marginRight: 19,
    },
    profileTextWrapper: {
        width: 200,
    },
    profileImg: {
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#5050A5', 
        marginTop: 36,
    }
});

export default ProfileScreen;
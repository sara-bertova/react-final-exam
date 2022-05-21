import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../store/actions/UserActions';

const VerifyEmailScreen = ({route, navigation}) => {

    const { email, password, repeatPassword } = route.params;
    console.log(password);

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./../assets/verify-email/whitelogo.png')}
            />
            <Text style={styles.heading}>Just one more step...</Text>
            <Text style={styles.text}>We need to verify your student status. There is an email waiting for you in your mailbox.</Text>
            <Image
                style={styles.image}
                source={require('./../assets/verify-email/postman-receive-letter.png')}
            />
           
            <TouchableOpacity style={styles.button} onPress={() => dispatch(signup(email, password, repeatPassword))}>
                <Text style={styles.buttonText}>I've verified my e-mail</Text>
                <Image
                    source={require('./../assets/verify-email/icons8-checked.png')}
                />
            </TouchableOpacity>
            <Text style={styles.text2}>Having trouble?</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Resend e-mail</Text>
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
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    buttonText: {
        color: '#5050A5',
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
    },
    input: {
        height: 35,
    },
    heading: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 22,
        textAlign: 'center',
    },
    logo: {
        width: 114,
        height: 114,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    image: {
        width: 214,
        height: 247,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 36,
        marginBottom: 60,
    },
    link: {
        textAlign: 'center',
        color: '#fff', 
        marginTop: 0,
        fontSize: 16,
    },
    link2: {
        textDecorationLine: 'underline',
    },
    text2: {
        textAlign: 'center',
        color: '#fff', 
        marginTop: 34,
        marginBottom: 2,
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        color: '#fff', 
        marginTop: 0,
        fontSize: 16,
    }
});

export default VerifyEmailScreen;
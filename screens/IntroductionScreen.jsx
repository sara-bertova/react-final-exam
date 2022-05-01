import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from '@react-navigation/native';

const IntroductionScreen = ({ navigation }) => {

    return (
        <Link to={{ screen: 'Onboarding'}} style={styles.container}>
            <View>
                <Text style={styles.heading}>Student Life at Copenhagen Business School</Text>
                <Text style={styles.subheading}>by</Text>
                <Image
                    style={styles.image}
                    source={require('./../assets/logo.PNG')}
                />
            </View>
        </Link>
    );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection:'row',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 238,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      heading: {
        textAlign: 'center',
        color: '#32305D',
        fontWeight: 'bold',
      },
      subheading: {
        textAlign: 'center',
        color: '#707070',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }
    });

export default IntroductionScreen;
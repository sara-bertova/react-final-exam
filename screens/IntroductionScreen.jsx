import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const IntroductionScreen = ({ navigation }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Onboarding")}>
          <Text style={styles.heading}>Student Life at Copenhagen Business School</Text>
          <Text style={styles.subheading}>by</Text>
          <Image
              style={styles.image}
              source={require('./../assets/logo.png')}
          />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 50,
      },
      image: {
        width: 283,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      heading: {
        textAlign: 'center',
        color: '#32305D',
        fontWeight: 'bold',
        fontSize: 30,
      },
      subheading: {
        textAlign: 'center',
        color: '#707070',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 26,
        marginBottom: 30,
        marginTop: 95,
      }
    });

export default IntroductionScreen;
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const OnboardingScreen = ({ navigation }) => {

    return (
            <View>
                <Image
                    style={styles.image}
                    source={require('./../assets/slide1.PNG')}
                />
                <Text style={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Text>
                <Button title="Next" onPress={() => navigation.navigate("Login")} color="#5050A5"/>
            </View>
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
        width: 290,
        height: 445,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      button: {
        textAlign: 'left',
        backgroundColor: '#5050A5',
        fontWeight: 'bold',
      },
      subheading: {
        textAlign: 'center',
        color: '#707070',
      }
    });

export default OnboardingScreen;
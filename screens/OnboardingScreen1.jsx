import { View, Text, StyleSheet, Image, Button } from 'react-native';

const OnboardingScreen1 = ({ navigation }) => {

    return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('./../assets/slide2.png')}
                />
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Text>
                <Image
                    style={styles.icon}
                    source={require('./../assets/dots-02.png')}
                />
                <Button title="Next" onPress={() => navigation.navigate("Onboarding2")} color="#5050A5"/>
            </View>
    );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection:'row',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 25,
  },
  icon: {
    width: 50,
    height: 9,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: 240,
    height: 376,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    textAlign: 'left',
    backgroundColor: '#5050A5',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  }
});

export default OnboardingScreen1;
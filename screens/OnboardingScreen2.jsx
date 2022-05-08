import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const OnboardingScreen2 = ({ navigation }) => {

    return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('./../assets/slide3.png')}
                />
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Text>
                <Image
                    style={styles.icon}
                    source={require('./../assets/dots-03.png')}
                />
                {/* <Button title="Next" onPress={() => navigation.navigate("Signup")} color="#5050A5"/> */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  button: {
    backgroundColor: '#5050A5',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  // button: {
  //   textAlign: 'left',
  //   backgroundColor: '#5050A5',
  //   fontWeight: 'bold',
  // },
  text: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  }
});

export default OnboardingScreen2;
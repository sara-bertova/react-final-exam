import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DiscoverScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Events', {
                    name: 'EVENTS',
                })}>
                <ImageBackground source={require('./../assets/Discover/events.png')} style={styles.img}>
                    <View style={[styles.title_wrapper, styles.title_wrapper_events]}>  
                        <Text style={styles.title}>ALL EVENTS</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Organisations', {
                    name: 'STUDENT ORGANISATIONS',
                })}>
                <ImageBackground source={require('./../assets/Discover/organizations.png')} style={styles.img}>
                    <View style={[styles.title_wrapper, styles.title_wrapper_organisation]}>  
                        <Text style={styles.title}>ALL STUDENT ORGANISATIONS</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Posts', {
                    name: 'POSTS',
                })}>
                <ImageBackground source={require('./../assets/Discover/posts.png')} style={styles.img}>
                    <View style={[styles.title_wrapper, styles.title_wrapper_posts]}>  
                        <Text style={styles.title}>ALL POSTS</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 337,
        height: 120,
        borderRadius: 10,
        margin: 19,
    },
    title_wrapper:{
        width: 337,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
        borderRadius: 10,
    },
    title_wrapper_events: {backgroundColor: '#700F6E',},
    title_wrapper_organisation: {backgroundColor: '#32305D',},
    title_wrapper_posts: {backgroundColor: '#07936B',},
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default DiscoverScreen;
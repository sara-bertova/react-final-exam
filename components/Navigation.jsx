import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, TouchableHighlight, Image, StyleSheet } from 'react-native';
import ChatScreen from "../screens/ChatScreen";
import AddChatroomScreen from "../screens/AddChatroom";
import MenuScreen from "./../screens/MenuScreen";
import HomeScreen from "./../screens/HomeScreen";
import DiscoverScreen from "./../screens/DiscoverScreen";
import SignupScreen from "./../screens/SignupScreen";
import LoginScreen from "./../screens/LoginScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import EditProfileScreen from "./../screens/EditProfileScreen";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NavigationComponent = ({ navigation }) => {
    const token = useSelector(state => state.user.idToken)

    return (
        <NavigationContainer >
            {token !== undefined ? (
                // Show the app with all navigation
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Discover" component={DiscoverScreen} />
                    <Tab.Screen options={{headerShown: false}} name="Chat" component={ChatStack} />
                    <Tab.Screen name="Menu" component={MenuStack} />
                </Tab.Navigator>
            ) : (
                // show a stack navigator with only signup and login screens.
                <Stack.Navigator>
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer >
    );
}


function MenuStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name="EditProfile" component={EditProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function ChatStack() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            {/* screenOptions={{ headerShown: false }} */}
            <Stack.Screen 
                name="Chat" 
                component={ChatScreen} 
                options={{
                    title: 'Chat',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (

                        <TouchableHighlight {...props} onPress={() => navigation.navigate('AddChatroomScreen')}>
                            <View>
                                <Image  
                                style={styles.create_image}
                                source={require('./../assets/icons8-create/icons8-create.png')} />
                            </View>
                        </TouchableHighlight>
                        // <Button {...props} title="Go" onPress={() => navigation.navigate('AddChatroomScreen')} />
                      ),
                }} 
            />
            <Stack.Screen 
                name="AddChatroomScreen" 
                component={AddChatroomScreen}
                options={{
                    headerShown: false,
                    title: 'Add chatroom',
                    headerTitleAlign: 'center',
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    create_image: {
        height: 21,
        width: 21,
        marginRight: 5,
    },
});

export default NavigationComponent;
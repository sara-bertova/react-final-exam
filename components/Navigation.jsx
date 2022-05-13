import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, TouchableHighlight, Image, StyleSheet } from 'react-native';

import ChatScreen from "../screens/ChatScreen";
import EditChatroomScreen from "../screens/EditChatroom";
import OneChatroom from "../screens/OneChatroom";

import HomeScreen from "./../screens/HomeScreen";
import DiscoverScreen from "./../screens/DiscoverScreen";

import Events from "./../screens/Events";
import Organisations from "./../screens/Organisations";
import Posts from "./../screens/Posts";
import OneEvent from "../screens/OneEvent";
import OnePost from '../screens/OnePost';

import MenuScreen from "./../screens/MenuScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import EditProfileScreen from "./../screens/EditProfileScreen";
import SetupProfileScreen from "./../screens/SetupProfileScreen";

import SignupScreen from "./../screens/SignupScreen";
import LoginScreen from "./../screens/LoginScreen";
import ResetPasswordScreen from "./../screens/ResetPasswordScreen";
import ResetPasswordEmailScreen from "./../screens/ResetPasswordEmailScreen";

import IntroductionScreen from "./../screens/IntroductionScreen";
import OnboardingScreen from "./../screens/OnboardingScreen";
import OnboardingScreen1 from "./../screens/OnboardingScreen1";
import OnboardingScreen2 from "./../screens/OnboardingScreen2";
import VerifyEmailScreen from "./../screens/VerifyEmailScreen";

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
                    {/* <Tab.Screen name="VerifyEmail" component={VerifyEmailScreen} options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#5050A5',
                            borderBottomColor: '#5050A5',
                        },
                        contentStyle:{
                            backgroundColor:'#5050A5'
                          }
                        }} /> */}
                    <Tab.Screen name="Home" component={FeedStack} 
                        options={{
                            headerShown: false,
                            tabBarLabel: "Home",
                            unmountOnBlur: true,
                        }}
                    />
                    <Tab.Screen name="Discover" component={DiscoverStack} 
                        options={{
                            headerShown: false,
                            tabBarLabel: "Discover",
                            unmountOnBlur: true,
                        }}
                    />
                    <Tab.Screen name="Chat" component={ChatStack} 
                        options={{
                            headerShown: false,
                            tabBarLabel: "Chat",
                            unmountOnBlur: true,
                        }}
                    />
                    <Tab.Screen name="Menu" component={MenuStack}
                        options={{
                            headerShown: false,
                            tabBarLabel: "Menu",
                            unmountOnBlur: true,
                        }} 
                        // options={{
                        //     title: 'MENU',
                        //     headerTitleAlign: 'center',
                        //     headerTintColor: '#5050A5',
                        // }}
                    />
                </Tab.Navigator>
            ) : (
                // show a stack navigator with only signup and login screens.
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor:'#fff'
                      }
                 }}>
                    <Stack.Screen name="Introduction" component={IntroductionScreen} />
                    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                    <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
                    <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} options={{
                        contentStyle: {
                            backgroundColor:'#5050A5'
                        }
                        }} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{
                    headerShown: true,
                    title: 'BACK',
                    headerTitleAlign: 'left',
                    headerTintColor: '#5050A5',
                }} ></Stack.Screen>
                    <Stack.Screen name="ResetPasswordEmail" component={ResetPasswordEmailScreen} options={{
                        contentStyle: {
                            backgroundColor:'#5050A5'
                        }
                        }} />
                    <Stack.Screen name="SetupProfile" component={SetupProfileScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer >
    );
}


function MenuStack() {
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    title: 'MENU',
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                }}>
            </Stack.Screen>
            <Stack.Screen 
                name="SetupProfile" 
                component={SetupProfileScreen}
                options={{
                    title: 'EDIT PROFILE',
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                }}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

function FeedStack() {
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen 
                name="Feed" 
                component={HomeScreen}
                options={{
                    title: 'FEED',
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                }} >
            </Stack.Screen>
            <Stack.Screen 
                name="OneEvent" 
                component={OneEvent}
                options={({ route }) => ({
                    title: route.params.postName,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>
            <Stack.Screen 
                name="OnePost" 
                component={OnePost}
                options={({ route }) => ({
                    title: route.params.postName,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}
function DiscoverStack() {
    return (
        <Stack.Navigator initialRouteName="Discover">
            <Stack.Screen 
                name="DiscoverOverview" 
                component={DiscoverScreen}
                options={{
                    title: 'DISCOVER',
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                }} >
            </Stack.Screen>

            <Stack.Screen 
                name="Events" 
                component={Events}
                options={({ route }) => ({
                    title: route.params.name,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>
            <Stack.Screen 
                name="OneEvent" 
                component={OneEvent}
                options={({ route }) => ({
                    title: route.params.postName,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>

            <Stack.Screen 
                name="Organisations" 
                component={Organisations}
                options={({ route }) => ({
                    title: route.params.name,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>
            <Stack.Screen 
                name="Posts" 
                component={Posts}
                options={({ route }) => ({
                    title: route.params.name,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>
            <Stack.Screen 
                name="OnePost" 
                component={OnePost}
                options={({ route }) => ({
                    title: route.params.postName,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

function ChatStack() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ChatScreen" 
                component={ChatScreen} 
                options={{
                    title: 'CHAT',
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                    headerRight: (props) => (
                        <TouchableHighlight {...props} onPress={() => navigation.navigate('EditChatroomScreen')}>
                            <View>
                                <Image  
                                style={styles.create_image}
                                source={require('./../assets/icons8-create/icons8create.png')} />
                            </View>
                        </TouchableHighlight>
                      ),
                }} 
            />
            <Stack.Screen 
                name="EditChatroomScreen" 
                component={EditChatroomScreen}
                options={{headerShown: false}}>
            </Stack.Screen>
            <Stack.Screen 
                name="OneChatroom" 
                component={OneChatroom}
                options={({ route }) => ({ 
                    title: route.params.chatName,               
                    headerTitleAlign: 'center',
                    headerTintColor: '#5050A5',
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    create_image: {
        height: 21,
        width: 21,
        marginRight: 26,
    },
});

export default NavigationComponent;
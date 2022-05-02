import { View, Text } from 'react-native';

const OneChat = ({ route, navigation }) => {

    const { chatId, chatName } = route.params;

    

    return (
        <View>
            <Text>I am SettingsScreen: {chatName}</Text>
        </View>
    );
}

export default OneChat;
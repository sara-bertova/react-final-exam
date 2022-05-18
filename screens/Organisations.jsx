import { View, Text, StyleSheet } from 'react-native';

const Organisations = () => {
    return (
        <View style={styles.container}>
            <Text>No organisations yet</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Organisations;
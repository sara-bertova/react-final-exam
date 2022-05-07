import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { fetchEvents } from '../store/actions/EventActions';

const HomeScreen = ({ navigation }: { navigation: any }) =>  {

    const dispatch = useDispatch();
    const events = useSelector((state: RootState) => state.event.events);
    console.log(events[0].title)

    useEffect(() => {
        dispatch(fetchEvents())
    }, []);

    const renderItem = ({ item }: { item: any }) => (
        

        <TouchableOpacity 
            onPress={() => navigation.navigate('OneChatroom', {
                chatId: item.id,
                chatName: item.title,
            })}>

            <View>
                <ImageBackground source={require('./../assets/cbs-yoga.png')} style={styles.feed_img}>
                    <Text>Inside</Text>
                </ImageBackground>
            </View>
            
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList data={events} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    feed_img: {
        width: 337,
        height: 190,
    }
});


export default HomeScreen;
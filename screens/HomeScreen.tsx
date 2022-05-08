import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { fetchEvents } from '../store/actions/EventActions';

const HomeScreen = ({ navigation }: { navigation: any }) =>  {

    const dispatch = useDispatch();
    const events = useSelector((state: RootState) => state.event.events);

    useEffect(() => {
        dispatch(fetchEvents())
    }, []);

    const imageMap = {
        'cbs-yoga.png' : require('./../assets/cbs-yoga.png'),
        'cbs-ghost-world.png' : require('./../assets/cbs-ghost-world.png'),

      }

    const renderItem = ({ item }: { item: any }) => (
    
        <TouchableOpacity 
            onPress={() => navigation.navigate('OneFeedPost', {
                postId: item.id,
                postName: item.title,
            })}
            >

            <View style={styles.feed_wrapper}>
                <ImageBackground source={imageMap[item.img as keyof typeof imageMap]} style={styles.feed_img}>
                    <Text style={[styles.white_text, styles.title]}>{item.title}</Text>
                    <Text style={[styles.white_text, styles.organizer]}>{item.organizer}</Text>
                    <Text style={styles.white_text}>
                        <Image    
                            source={require('./../assets/icons8-alarm_clock/icons8-alarm_clock.png')}
                        /> {item.time}
                    </Text>
                    <Text style={styles.white_text}>
                        <Image    
                            source={require('./../assets/icons8-marker/icons8-marker.png')}
                        /> {item.place}
                    </Text>
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
    feed_wrapper: {
        flex: 1,
        marginTop: 24,
        alignItems: 'center',
    },
    feed_img: {
        width: 337,
        height: 190,
        justifyContent: 'flex-end',
        padding: 10,
    },
    white_text: {
        color: '#ffffff',
    },
    organizer: {
        fontSize: 12,
        paddingVertical: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});


export default HomeScreen;
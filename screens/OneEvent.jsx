import { useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/actions/FeedActions';

const OneEvent = ({ route, navigation }) => {

    const { postId, postName } = route.params

    const dispatch = useDispatch();
    const events = useSelector(state => state.event.events.filter(event => event.id == postId))
    const event = events[0]

    useEffect(() => {
        dispatch(fetchEvents())
    }, []);

    const imageMap = {
        'cbs-yoga.png' : require('./../assets/cbs-yoga.png'),
        'cbs-ghost-world.png' : require('./../assets/cbs-ghost-world.png'),
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.intro_wrapper}>
                <Image source={imageMap[event.img]} style={styles.img} />
                
                <View style={styles.info}>
                    <Text style={styles.title}>{event.title}</Text>

                    <Text style={styles.time}>
                        <Image style={styles.icon_img}  
                            source={require('./../assets/icons8-alarm_clock/icons8-alarm_clock.png')}
                        /> {event.time}
                    </Text>

                    <Text style={styles.white_text}>
                        <Image style={styles.icon_img}    
                            source={require('./../assets/icons8-marker/icons8-marker.png')}
                        /> {event.place}
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={require('./../assets/chat-img/chat-img-sm.png')} />

                    <TouchableOpacity style={styles.input_wrapper}>
                        <Text style={styles.organizer}>{event.organizer}</Text>
                        <Text style={styles.organizer_subtext}>View page</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.chat_icon}>
                        <Image source={require('./../assets/icons8-chat/icons8-chat.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.chat_icon} onPress={() => {
                                      navigation.navigate('SendEmail', {
                                            email: event.email, 
                                       })
                                    }}>
                        <Image source={require('./../assets/icons8-mail-24.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.event_status}>
                    <TouchableOpacity style={styles.event_status_wrapper}>
                        <Text>
                            <Image style={styles.status_img}    
                                source={require('./../assets/icons8-rating/icons8-rating.png')}
                            /> Interested
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.event_status_wrapper}>
                        <Text>
                            <Image style={styles.status_img}    
                                source={require('./../assets/icons8-today/icons8-today-01.png')}
                            /> Going
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.event_status_result}>
                    <Text style={styles.one_event_status_result}>
                        <Image style={[styles.status_img, styles.icon_img]}    
                            source={require('./../assets/icons8-rating/icons8-rating-full.png')}
                        /> 145 Interested
                    </Text>

                    <Text style={styles.one_event_status_result}>
                        <Image style={[styles.status_img, styles.icon_img]}    
                            source={require('./../assets/icons8-today/icons8-today-01.png')}
                        /> 35 Going
                    </Text>
                </View>
            </View>

            <View style={styles.description}>
                <Text>{event.description}</Text>
                <Text style={styles.showMore_btn}>Show more</Text>
            </View>

            <View style={styles.schedule}>
                <Text style={styles.schedule_title}>SCHEDULE</Text>
                {Object.keys(event.schedule).map((keyName, i) => ( 
                    <View key={i} style={(i === event.schedule.length - 1) ? styles.schedule_wrapper_noBorder : styles.schedule_wrapper}>
                        <Text key={event.schedule[keyName][1]} 
                              style={styles.schedule_time}>{event.schedule[keyName][1]}</Text>
                        <Text key={event.schedule[keyName][0]}
                              style={styles.schedule_text}>{event.schedule[keyName][0]}</Text>
                    </View>
                ))}
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        color: '#333333',
    },
    intro_wrapper: {
        backgroundColor: '#ffffff',
        paddingBottom: 24,
    },
    img: {
        width: '100%',
        height: 220,
        justifyContent: 'flex-end',
        padding: 10,
    },
    info: {
        padding: 24,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    time: {
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    icon_img: {
        tintColor: "#000000",
    },
    chat_icon: {
        width: 37,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#5050A5',
        borderRadius: 5,
        marginRight: 5,
    },
    email: {
        marginRight: 0,
    },
    inputContainer: {
        height: 70,
        borderWidth: 1,
        padding: 10,
        borderColor: '#EEEEEE',
        // width: 337,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginHorizontal: 19,
    },
    input_wrapper: {
        width: 219,
    },
    organizer: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
    },
    organizer_subtext: {
        color: '#AAAAAA',
        fontSize: 12,
    },
    event_status: {
        width: 336,
        marginTop: 24,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    event_status_wrapper: {
        width: 159,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#5050A5',
        padding: 7,
    },
    status_img: {
        width: 16,
        height: 15,
    },
    event_status_result: {
        width: 300,
        marginTop: 24,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    one_event_status_result: {
        width: 100,
        fontSize: 12,
    },
    description: {
        backgroundColor: '#ffffff',
        padding: 19,
        marginVertical: 24,
        fontSize: 14,
    },
    showMore_btn: {
        color: '#5050A5',
        fontSize: 16,
        marginTop: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    schedule: {
        backgroundColor: '#ffffff',
        padding: 19,
        marginBottom: 150,
        fontSize: 14,
    },
    schedule_title: {
        color: '#5050A5',
        fontSize: 26,
        marginTop: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    schedule_wrapper: {
        width: 337,
        justifyContent: 'center',
        color: '#333333',
        fontSize: 14,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    schedule_wrapper_noBorder: {
        width: 337,
        justifyContent: 'center',
        color: '#333333',
        fontSize: 14,
        flexDirection: 'row',
    },
    schedule_time: {
        width: 70,
        alignSelf: 'flex-end',
        paddingVertical: 10,
        marginLeft: 70,
    },
    schedule_text: {
        width: 248,
        paddingVertical: 10,
    },
})


export default OneEvent;
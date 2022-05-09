import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { fetchEvents, fetchPosts } from '../store/actions/FeedActions';

const HomeScreen = ({ navigation }: { navigation: any }) =>  {

    const dispatch = useDispatch();
    const events = useSelector((state: RootState) => state.event.events);
    const posts = useSelector((state: RootState) => state.post.posts);
    // const eventsPosts = events.concat(posts)

    useEffect(() => {
        dispatch(fetchEvents())
        dispatch(fetchPosts())
    }, []);

    const imageMap = {
        'cbs-yoga.png' : require('./../assets/cbs-yoga.png'),
        'cbs-ghost-world.png' : require('./../assets/cbs-ghost-world.png'),
        'post1-01.png' : require('./../assets/posts/post1-01.png'),
        'post2-01.png' : require('./../assets/posts/post2-01.png'),
    }

    const renderEvents = ({ item }: { item: any }) => (
    
        <TouchableOpacity 
            onPress={() => navigation.navigate('OneEvent', {
                postId: item.id,
                postName: item.title,
            })}
            >
                
            <View style={styles.feed_wrapper}>
                <ImageBackground source={imageMap[item.img as keyof typeof imageMap]} style={styles.feed_img}>
                    <Text style={[styles.white_text, styles.title]}>{item.title}</Text>
                    <Text style={[styles.white_text, styles.event_organizer]}>{item.organizer}</Text>
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

    const renderPosts = ({ item }: { item: any }) => (
    
        <TouchableOpacity 
            onPress={() => navigation.navigate('OnePost', {
                postId: item.id,
                postName: item.title,
            })}
            >

            <View style={[styles.feed_wrapper ,styles.post_wrapper]}>
                <Image source={imageMap[item.img as keyof typeof imageMap]} style={styles.post_img}/>
                <View style={styles.post_content}>
                    <Text style={styles.post_cat}>
                        <Image source={require('./../assets/icons8-news/icons8-news.png')}/> BLOG
                    </Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.post_time_wrapper}>
                        <Text style={styles.post_time}>{item.time}</Text>
                        <View style={styles.post_lc_wrpper}>
                            <Text style={styles.likes}><Image source={require('./../assets/icons8-thumbs_up/icons8-thumbs_up.png')}/> 73</Text>
                            <Text style={styles.comments}><Image source={require('./../assets/icons8-comments/icons8-comments.png')}/> 31</Text>
                        </View>
                    </View>
                    <View style={styles.post_organizer_wrapper}>
                        <Image source={require('./../assets/chat-img/chat-img-sm.png')} style={styles.post_organizer_img}/>
                        <Text style={styles.post_organizer}>{item.organizer}</Text>
                    </View>
                </View>
            </View>
            
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <FlatList listKey={'events'} data={events} renderItem={renderEvents} />
            <FlatList listKey={'posts'} data={posts} renderItem={renderPosts} />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    feed_wrapper: {
        flex: 1,
        marginTop: 24,
        alignSelf: 'center',
    },
    post_wrapper: {
        width: 337,
        backgroundColor: '#ffffff',
    },
    feed_img: {
        width: 337,
        height: 190,
        justifyContent: 'flex-end',
        padding: 20,
    },
    post_img: {
        width: 337,
        height: 155,
    },
    white_text: {
        color: '#ffffff',
    },
    event_organizer: {
        fontSize: 12,
        paddingVertical: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    post_content: {
        padding: 20,
    },
    post_cat: {
        color: '#5050A5',
        fontWeight: 'bold',
    },
    post_time_wrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    post_lc_wrpper: {
        flexDirection: 'row',
    },
    post_time: {
        fontSize: 12,
        color: '#AAAAAA',
    },
    likes: {
        color: '#5050A5',
        fontWeight: 'bold',
        marginRight: 10,
        fontSize: 12,
    },
    comments: {
        color: '#5050A5',
        fontWeight: 'bold',
        fontSize: 12,
    },
    post_organizer_wrapper: {
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        flexDirection: 'row',
        paddingTop: 10,
        marginTop: 5,
    },
    post_organizer_img: {
        width: 32,
        height: 34,
    },
    post_organizer: {
        width: '80%',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default HomeScreen;
import { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/actions/FeedActions';
import Moment from 'moment';

const OnePost = ({ route, navigation }) => {

    const { postId, postName } = route.params;
    const [text, onChangeText] = useState('')

    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts.filter(post => post.id == postId));
    const post = posts[0]

    useEffect(() => {
        dispatch(fetchEvents())
    }, []);

    const imageMap = {
        'post1-01.png' : require('./../assets/posts/post1-01.png'),
        'post2-01.png' : require('./../assets/posts/post2-01.png'),
    }

    // console.log('*************** ', post.title)

    return (

        <ScrollView style={styles.container}>
            <Image source={imageMap[post.img]} style={styles.img}></Image>
            
            <Text style={styles.title}>{post.title}</Text>

            <TouchableOpacity style={styles.inputContainer}>
                <Image source={require('./../assets/chat-img/chat-img-sm.png')} />
                <View style={styles.input_wrapper}>
                    <Text style={styles.organizer}>{post.organizer}</Text>
                    <Text style={styles.organizer_subtext}>View page</Text>
                </View>
                <View style={styles.chat_icon}>
                    <Image source={require('./../assets/icons8-chat/icons8-chat.png')} />
                </View>
            </TouchableOpacity>

            <View style={styles.post_time_wrapper}>
                        <Text style={styles.post_time}>{post.time}</Text>
                        <View style={styles.post_lc_wrpper}>
                            <Text style={styles.likes}><Image source={require('./../assets/icons8-thumbs_up/icons8-thumbs_up.png')}/> 73</Text>
                            <Text style={styles.comments}><Image source={require('./../assets/icons8-comments/icons8-comments.png')}/> 31</Text>
                        </View>
                    </View>

            <Text style={styles.text}>{post.description}</Text>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        color: '#333333',
        backgroundColor: '#ffffff',
    },
    img: {
        width: '100%',
        height: 220,
        justifyContent: 'flex-end',
        padding: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        padding: 24,
    },
    chat_icon: {
        width: 37,
        height: 37,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#5050A5',
        borderRadius: 5,
    },
    inputContainer: {
        height: 70,
        borderWidth: 1,
        padding: 10,
        borderColor: '#EEEEEE',
        width: 337,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
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
    post_time_wrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 24,
        width: 337,
        alignSelf: 'center',
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
    text: {
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
})


export default OnePost;
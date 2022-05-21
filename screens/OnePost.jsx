import { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, sendComment } from '../store/actions/FeedActions';
import Moment from 'moment';

const OnePost = ({ route }) => {

    const { postId, postName } = route.params;
    const [text, onChangeText] = useState('')

    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts.filter(post => post.id == postId));
    const post = posts[0]
    const username = useSelector(state => state.user.username)

    useEffect(() => {
        dispatch(fetchEvents())
    }, []);

    const resetInputField = () => {
        onChangeText('');
    };

    const imageMap = {
        'post1-01.png' : require('./../assets/posts/post1-01.png'),
        'post2-01.png' : require('./../assets/posts/post2-01.png'),
    }

    return (

        <View style={styles.container}>
            <ScrollView style={styles.post_wrapper}>
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
                                <Text style={styles.likes}><Image source={require('./../assets/icons8-thumbs_up/icons8-thumbs_up.png')}/>{post.likes}</Text>
                                <Text style={styles.comments}><Image source={require('./../assets/icons8-comments/icons8-comments.png')}/> 31</Text>
                            </View>
                        </View>

                <Text style={styles.text}>{post.description}</Text>

                <View style={styles.like_post_wrapper}>
                    <Text style={styles.likes_number}>{post.likes} liked this</Text>
                    <TouchableOpacity>
                        <Text style={styles.likes_wrapper}>
                            <Image source={require('./../assets/icons8-thumbs_up/icons8-thumbs_up-md.png')} style={styles.likes_icon} /> Like
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.post_comments}>
                    <Text style={styles.comments_title}>COMMENTS</Text>
                    {post.comments != undefined ? Object.keys(post.comments).map((keyName, i) => ( 
                        <View key={i} style={styles.comment_wrapper}>
                            <Text key={post.comments[keyName].userId} style={styles.comment_user}>{username}</Text>
                            <Text key={post.comments[keyName].text}
                                style={styles.one_comment}>{post.comments[keyName].text}</Text>
                            
                            <Text key={post.comments[keyName].timestamp} style={styles.comment_time}>{Moment(post.comments[keyName].timestamp).format('mm')} min</Text>
                        </View>
                    )) : <Text>No comments yet</Text>}
                </View>

            </ScrollView>
            
            <View style={styles.chatbox_wrapper}>
                <View style={styles.chatbox}>

                    <Image  
                        style={styles.chat_image}
                        source={require('./../assets/emma/emma-101.png')}
                    />
                
                    <TextInput placeholder="Add comment"
                        multiline
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text} />

                    <Button color="#5050A5" title='Send' 
                            disabled={!text}
                            onPress={
                                () => { dispatch(sendComment(postId, text)); resetInputField()}
                            } />
                </View>
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        color: '#333333',
        backgroundColor: '#ffffff',
        flex: 1,
    },
    post_wrapper: {
        flex: 1,
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
        fontSize: 16,
    },
    chatbox_wrapper: {
        backgroundColor: 'white',
        padding: 12,
        justifyContent: 'space-between',
    },
    chat_image: {
        width: 50,
        height: 50,
    },
    chatbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: 245,
        marginHorizontal: 12,
        marginVertical: 12,
        padding: 10,
        fontSize: 12,
        backgroundColor: '#EEEEEE',
    },
    comments_title: {
        color: '#5050A5',
        fontSize: 26,
        marginTop: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    post_comments: {
        paddingHorizontal: 24,
    },
    comment_wrapper: {
        marginVertical: 10,
    },
    comment_user: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    one_comment: {
        fontSize: 16,
    },
    comment_time: {
        paddingTop: 5,
        fontSize: 12,
        color: '#AAAAAA',
    },
    like_post_wrapper: {
        marginHorizontal: 24,
        width: 350,
        alignSelf: 'center',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        flexDirection: 'row',
        padding: 10,
        marginTop: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    likes_number: {
        color: '#5050A5',
        fontSize: 20,
        fontWeight: 'bold',
    },
    likes_wrapper: {
        fontSize: 18, 
        color: '#5050A5',
        fontWeight: 'bold',
        borderColor: '#5050A5',
        borderWidth: 1,
        borderRadius: 5,
        width: 120,
        padding: 8,
    },
})


export default OnePost;
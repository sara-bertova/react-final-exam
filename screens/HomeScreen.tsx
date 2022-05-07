import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { fetchChatrooms } from '../store/actions/ChatActions';

const HomeScreen = ({ navigation }: { navigation: any }) =>  {

    const dispatch = useDispatch();
    // const events = useSelector((state: RootState) => state.event.events);

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    return (
        <View>
            <Text>I am HomeScreen</Text>
        </View>
    );
}

export default HomeScreen;
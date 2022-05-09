import { Event, Post } from "../../entities/Feed";

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchEvents = () => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth='
            + idToken, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        const data = await response.json(); // json to javascript
    
        if (!response.ok) {
            //There was a problem..
        } else {
            let events = [];
                       
            for (const key in data) {
                let event = new Event(data[key].title, 
                                     data[key].description, 
                                     data[key].img, 
                                     data[key].organizer, 
                                     data[key].place, 
                                     data[key].time, 
                                     data[key].email, 
                                     data[key].schedule, 
                                     key)
                events.push(event)
            }

            dispatch({ type: FETCH_EVENTS, payload: events })
        }
    };
}


export const fetchPosts = () => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth='
            + idToken, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        const data = await response.json(); // json to javascript
    
        if (!response.ok) {
            //There was a problem..
        } else {
            let posts = [];
                       
            for (const key in data) {
                let post = new Post(data[key].title, 
                                     data[key].description, 
                                     data[key].img, 
                                     data[key].organizer,  
                                     data[key].time,  
                                     data[key].comments, 
                                     key)
                posts.push(post)
            }

            dispatch({ type: FETCH_POSTS, payload: posts })
        }
    };
}
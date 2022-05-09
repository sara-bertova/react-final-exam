import { FETCH_EVENTS, FETCH_POSTS } from "../actions/FeedActions";

const initialState = {
    events: [],
    posts: [],
};


const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_EVENTS:
            return { ...state, events: action.payload }

        case FETCH_POSTS:
            return { ...state, posts: action.payload }

        default:
            return state; //does not do anything yet​   
    }
};

export default feedReducer;
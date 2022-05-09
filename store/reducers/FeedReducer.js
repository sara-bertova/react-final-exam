import { FETCH_EVENTS } from "../actions/FeedActions";

const initialState = {
    events: [],
};


const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_EVENTS:
            console.log(action.payload)
            return { ...state, events: action.payload }

        default:
            return state; //does not do anything yet​   
    }
};

export default feedReducer;
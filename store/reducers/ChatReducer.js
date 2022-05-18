import { Chatroom } from "../../entities/Chatroom";
import { ADD_CHATROOM, DELETE_CHATROOM, FETCH_CHATROOMS } from "../actions/ChatActions";

const initialState = {
    chatrooms: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_CHATROOMS:
            console.log('Chatrooms******: ', action.payload)
            return { ...state, chatrooms: action.payload }

        case ADD_CHATROOM:
            const chatroom = new Chatroom(action.payload.chatroomName, [], './../assets/chat-img/chat-img-sm.png', action.payload.id);
            const newChatroomArray = [...state.chatrooms, chatroom];
            return { ...state, chatrooms: newChatroomArray };

        case DELETE_CHATROOM:
            console.log(action.payload);
            return {
                ...state, chatrooms:
                    state.chatrooms.filter(chatroom => chatroom.id !== action.payload)
            };

        default:
            return state;
    }
};

export default chatReducer;
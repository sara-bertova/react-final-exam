import { FETCH_EVENTS } from "../actions/EventActions";

const initialState = {
    events: [],
};


const eventReducer = (state = initialState, action) => {
    // switch (action.type) {
        
    //     case FETCH_CHATROOMS:
    //         return { ...state, chatrooms: action.payload }

    //     case ADD_CHATROOM:
    //         console.log(action.payload); // Should print out the chatroomName
    //         //state.chatrooms.push(chatroom); // mutate chatrroms array! Not Allowed!

    //         const chatroom = new Chatroom(action.payload.chatroomName, [], './../assets/chat-img/chat-img-sm.png', action.payload.id);
    //         // const chatroom = { title: action.payload, chatmessages: [], imageUrl: ''}

    //         const newChatroomArray = [...state.chatrooms, chatroom];
    //         return { ...state, chatrooms: newChatroomArray };

    //     case DELETE_CHATROOM:
    //         console.log(action.payload);
    //         return {
    //             ...state, chatrooms:
    //                 state.chatrooms.filter(chatroom => chatroom.id !== action.payload)
    //         };

    //     case SEND_MESSAGE:
    //         console.log(action.payload.oneMessage.text)
    //         // chatroom = state.chatrooms.filter(chatroom => chatroom.id == action.payload.chatId)
    //         // console.log(chatroom.title)
    //         // return { ...state, chatroom.chatmessages:  }

    //     //return {...state, chatrooms: [...state.chatrooms, {title: action.payload}]}

    //     default:
    //         return state; //does not do anything yet​   
    // }
};

export default eventReducer;
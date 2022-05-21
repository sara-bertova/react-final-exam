import { Chatmessage, Chatroom } from "../../entities/Chatroom";

export const ADD_CHATROOM = 'ADD_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
export const FETCH_CHATROOMS = 'FETCH_CHATROOMS';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const fetchChatrooms = () => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth='
            + idToken, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        const data = await response.json();
        if (!response.ok) {
            console.log('Something went wrong')
        } else {


            let chatrooms = [];
            for(const key in data) {
                let messages = [];

                for(const key2 in data[key].chatmessages) {
                    let msg = data[key].chatmessages[key2];
                    console.log('msg*****: ', msg)
                    messages.push(new Chatmessage(msg.text, new Date(msg.timestamp)));
                }

                chatrooms.push(new Chatroom(data[key].chatroomName, messages, '', key))
            }

            dispatch({ type: FETCH_CHATROOMS, payload: chatrooms })
        }
    };
}

export const addChatroom = (chatroomName: string) => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth='
            + idToken, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                chatroomName
            })
        });


        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            console.log('Something went wrong')
        } else {
            dispatch({ type: ADD_CHATROOM, payload: { chatroomName, id: data.name } })
        }
    };
};

export const deleteChatroom = (id: string) => {
    return async (dispatch: any, getState: any) => {
        let idToken: string = getState().user.idToken

        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/' + id + '.json/?auth='
            + idToken, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });


        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            console.log('Something went wrong')
        } else {
            dispatch({ type: DELETE_CHATROOM, payload: id })
        }
    };
};

export const sendMessage = (chatId: string, message: string) => {
    return async (dispatch: any, getState: any) => {
        const oneMessage = new Chatmessage(message, new Date());
        const idToken = getState().user.idToken
        
        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/' + chatId + '/chatmessages.json/?auth='
            + idToken, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                text: oneMessage.text,
                timestamp: oneMessage.timestamp
            })
        });

        if (!response.ok) {
            console.log('Something went wrong')
        } else {
            dispatch(fetchChatrooms())
        }
    };   
}


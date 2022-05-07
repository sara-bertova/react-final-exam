export const FETCH_EVENTS = 'FETCH_EVENTS';

export const fetchEvents = () => {
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


        const data = await response.json(); // json to javascript
        
        if (!response.ok) {
            //There was a problem..
        } else {

            let chatrooms = [];
            for (const key in data) {
                let chatroom = new Chatroom(data[key].chatroomName, data[key].chatmessages, '', key)
                chatrooms.push(chatroom)
            }

            dispatch({ type: FETCH_EVENTS, payload: chatrooms })
        }
    };
}
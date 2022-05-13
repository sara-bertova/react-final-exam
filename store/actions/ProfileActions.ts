import * as SecureStore from 'expo-secure-store';
import { User } from "../../entities/User";

export const CREATE_USER = 'CREATE_USER';

export const createUser = () => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://react-exam-68375-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth='
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
            let users = [];
                       
            for (const key in data) {
                let user = new User(data[key].name, 
                                     data[key].programme, 
                                     key)
                users.push(user)
            }

            dispatch({ type: CREATE_USER, payload: users })
        }
    };
}
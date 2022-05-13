import * as SecureStore from 'expo-secure-store';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const RESTORE_USER = 'RESTORE_USER';
export const UPDATE_USER = 'UPDATE_USER';


export const restoreUser = (email, token) => {
    return { type: RESTORE_USER, payload: { email, idToken: token } };
};

export const updateUser = (username, token) => {
    return { type: UPDATE_USER, payload: { username, idToken: token } };
};

export const signup = (email, password, repeatPassword) => {
    return async dispatch => {
        // this.setState({ loading: true })
        // let errorFlag = false;
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUnUm3h11wX7dP0NZixdZvw7X8eqK282o', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            // if (password !== repeatPassword ) {
            //     errorFlag = true;
            //     this.setState({ passwordErrorMessage: "Password and repeat password should be same."});
            //   }

            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        // console.log(await response.json());

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: SIGNUP, payload: { email: data.email, username: data.username, programme: data.programme, idToken: data.idToken } })
        }
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUnUm3h11wX7dP0NZixdZvw7X8eqK282o', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        // console.log(await response.json());

        if (!response.ok) {
            //There was a problem..
        } else {
            const data = await response.json(); // json to javascript
            dispatch({ type: LOGIN, payload: { email: data.email, username: data.username, programme: data.programme, idToken: data.idToken } })
        }
    };
};





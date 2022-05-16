import * as SecureStore from 'expo-secure-store';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const RESTORE_USER = 'RESTORE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGOUT = 'LOGOUT';


export const restoreUser = (email: string, token: string) => {
    return { type: RESTORE_USER, payload: { email, idToken: token } };
};

export const logout = () => {
    return async (dispatch: any) => {
        SecureStore.deleteItemAsync('token');
        SecureStore.deleteItemAsync('email');

        dispatch({ type: LOGOUT })
    }
};

export const signup = (email: string, password: string) => {
    return async (dispatch: any) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUnUm3h11wX7dP0NZixdZvw7X8eqK282o', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ //javascript to json
                email: email,
                password: password,
                displayName: email,
                returnSecureToken: true
            })
        });

        const data = await response.json(); // json to javascript

        if (!response.ok) {
            console.log('Something went wrong')
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: SIGNUP, payload: { email: data.email, username: data.displayName, idToken: data.idToken } })
        }
    };
};

export const login = (email: string, password: string) => {
    return async (dispatch: any) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUnUm3h11wX7dP0NZixdZvw7X8eqK282o', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            console.log('Something went wrong')
        } else {
            const data = await response.json();
            dispatch({ type: LOGIN, payload: { email: data.email, username: data.displayName, idToken: data.idToken } })
        }
    };
};

export const updateUser = (username: string) => {
    console.log(username)
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken
        console.log(username)
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDUnUm3h11wX7dP0NZixdZvw7X8eqK282o', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idToken: idToken,
                displayName: username
            })
        });

        if (!response.ok) {
            console.log('Something went wrong')
        } else {
            const data = await response.json(); 
            dispatch({ type: LOGIN, payload: { email: data.email, username: data.displayName, idToken: data.idToken } })
        }
    };
};





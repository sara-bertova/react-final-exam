import * as SecureStore from 'expo-secure-store';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const RESTORE_USER = 'RESTORE_USER';
export const UPDATE_USER = 'UPDATE_USER';


export const restoreUser = (email: string, token: string) => {
    return { type: RESTORE_USER, payload: { email, idToken: token } };
};

// export const updateUser = (username, token) => {
//     return { type: UPDATE_USER, payload: { username, idToken: token } };
// };

export const signup = (email: string, password: string, repeatPassword: string) => {
    return async (dispatch: any, getState: any) => {
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
                displayName: email,
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
            dispatch({ type: SIGNUP, payload: { email: data.email, username: data.displayName, programme: data.programme, idToken: data.idToken } })
        }
    };
};

export const login = (email: string, password: string) => {
    return async (dispatch: any, getState: any) => {
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
            dispatch({ type: LOGIN, payload: { email: data.email, username: data.displayName, programme: data.programme, idToken: data.idToken } })
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
            console.log('chyba')
            //There was a problem..
        } else {
            const data = await response.json(); 
            // dispatch(getUser())
            dispatch({ type: LOGIN, payload: { email: data.email, username: data.displayName, programme: data.programme, idToken: data.idToken } })
        }
    };
};

// export const getUser = () => {
//     return async (dispatch: any, getState: any) => {
//         const idToken = getState().user.idToken
//         const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDUnUm3h11wX7dP0NZixdZvw7X8eqK282o', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 idToken: idToken,
//             })
//         });

//         if (!response.ok) {
//             console.log('chyba')
//             //There was a problem..
//         } else {
//             const data = await response.json();
//             Object.keys(data.users).map((keyName, i) => (
//                 console.log(data.users[keyName].email)
//             ))
//             // dispatch(restoreUser(data.email, idToken))
//             // dispatch({ type: LOGIN, payload: { email: data.email, username: data.displayName, programme: data.programme, idToken: data.idToken } })
//         }
//     };
// };





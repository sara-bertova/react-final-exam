import { RESTORE_USER, SIGNUP, LOGIN, UPDATE_USER, LOGOUT, CHANGE_PASSWORD } from "../actions/UserActions";

export interface UserState {
    idToken: string | undefined;
    email: string | undefined;
    username: string | undefined;
    programme: string | undefined;
}

const initialState: UserState = {
    idToken: undefined,
    email: undefined,
    username: undefined,
    programme: undefined
};

export interface Action {
    type: string;
    payload: any;
}

const userReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email, username: action.payload.username }
        case LOGIN:
            console.log(action.payload.username)
            return { ...state, idToken: action.payload.idToken, email: action.payload.email, username: action.payload.username } 
        case RESTORE_USER:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }
        case UPDATE_USER:
            console.log(action.payload.username)
            return { ...state, idToken: action.payload.idToken, username: action.payload.username }
        case LOGOUT:
            return { ...state, idToken: undefined, email: undefined }
        case CHANGE_PASSWORD:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }

        default:
            return state; //does not do anything yet​  
    }
};

export default userReducer;
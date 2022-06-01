import { SIGNUP, LOGIN, UPDATE_USER, LOGOUT, CHANGE_PASSWORD } from "../actions/UserActions";

export interface UserState {
    idToken: string | undefined;
    email: string | undefined;
    username: string | undefined
}

const initialState: UserState = {
    idToken: undefined,
    email: undefined,
    username: undefined
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
            return { ...state, idToken: action.payload.idToken, email: action.payload.email, username: action.payload.username } 
        case UPDATE_USER:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email, username: action.payload.username }
        case LOGOUT:
            return { ...state, idToken: undefined, email: undefined }
        case CHANGE_PASSWORD:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }

        default:
            return state;
    }
};

export default userReducer;
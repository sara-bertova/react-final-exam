import { FETCH_PROGRAMMES } from "../actions/ProgrammeActions";

const initialState = {
    programmes: [],
};


const programmeReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_PROGRAMMES:
            console.log(action.payload)
            return { ...state, programmes: action.payload }

        default:
            return state; //does not do anything yet​   
    }
};

export default programmeReducer;
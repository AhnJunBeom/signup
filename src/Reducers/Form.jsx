import { SIGN_UP } from '../Constants/ActionTypes';

const initialState = {
    id : '',
    name : '',
    email : '',
    joinTime : ''
}

const form = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                id: action.id,
                name: action.name,
                email: action.email,
                joinTime: action.joinTime
            };
        default:
            return state;
    }
}
export default form;
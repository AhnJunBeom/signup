import { SIGN_UP } from '../Constants/ActionTypes';

const initialState = {
    id : '',
    pw : '',
    name : '',
    phoneNumber : '',
    email : '',
    allowAd : '',
    joinTime : ''
}

const form = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                id: action.id,
                pw: action.pw,
                name: action.name,
                phoneNumber: action.phoneNumber,
                email: action.email,
                allowAd: action.allowAd,
                joinTime: action.joinTime
            };
        default:
            return state;
    }
}
export default form;
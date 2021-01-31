import { combineReducers } from 'redux';
import form from './Form';

const rootReducer = combineReducers({
    form
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
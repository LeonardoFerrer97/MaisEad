import { combineReducers } from 'redux';
import EadReducer from './EadReducer'
import UserReducer from './UserReducer';

const rootReducer = combineReducers ({
    listaEad: EadReducer,
    user: UserReducer
});

export default rootReducer
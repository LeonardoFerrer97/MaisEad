import { combineReducers } from 'redux';
import EadReducer from './EadReducer'

const rootReducer = combineReducers ({
    listaEad: EadReducer,
});

export default rootReducer
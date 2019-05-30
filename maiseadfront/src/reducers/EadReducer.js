import {OBTER_EAD} from '../actions/index';

export default function (state = {}, action = {}){
    switch(action.type){
        case OBTER_EAD:
            return action.payload;
        default:
            return state;
    }
}
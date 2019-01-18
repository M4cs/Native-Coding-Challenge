import * as actionTypes from '../actions/actionType';

export default (state = [], action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_CAT:
        return [
            ...state,
            Object.assign({}, action.cat)
        ];
        case actionTypes.REMOVE_CAT:
        return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }
};

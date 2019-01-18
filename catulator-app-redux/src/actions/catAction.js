import * as actionTypes from './actionType';

export const createCat = (cat) => {
    return {
        type: actionTypes.CREATE_NEW_CAT,
        cat: cat
    }
};

export const deleteCat = (id) => {
    return {
        type: actionTypes.REMOVE_CAT,
        id: id
    }
}

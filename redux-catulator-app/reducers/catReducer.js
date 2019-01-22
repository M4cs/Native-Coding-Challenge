import { ACTION_TYPES } from '../actions/catActions';
import { handleActions } from 'redux-actions';

export const BEG_STATE = {
    allCats: [],
    selectedCat: {},
};

const getCatInfo = (state) => ({
    ...state,
    allCats
});

const addCat = (state, { payload: { catName, catBreed, catAge, catGender } }) => ({
    ...state,
    allCats: [...state.allCats, { catName, catBreed, catAge, catGender }]
});

const catReducer = handleActions(
    {
        [ACTION_TYPES.GET_CAT_INFO]: getCatInfo,
        [ACTION_TYPES.ADD_CAT]: addCat
    },
    BEG_STATE
);

export default catReducer;
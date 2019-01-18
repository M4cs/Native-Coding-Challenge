import { createAction } from 'redux-actions';
import createContants from 'namespace-constants';

export const ACTION_TYPES = createContants('cat', [
    'GET_CAT_INFO',
    'ADD_CAT'
]);

export const addCatInfo = createAction(ACTION_TYPES.GET_CAT_INFO);

export const addCat = createAction(ACTION_TYPES.ADD_CAT);
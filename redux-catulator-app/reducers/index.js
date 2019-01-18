import { combineReducers } from 'redux';
import cats from './catReducer';

const mainReducer = combineReducers({
    cats
});

export default mainReducer;
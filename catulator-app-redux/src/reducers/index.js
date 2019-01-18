import { combineReducers } from 'redux';
import cats from './catReducer';

export default combineReducers({
    cats: cats
});
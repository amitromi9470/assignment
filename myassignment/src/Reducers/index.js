import {combineReducers} from 'redux';
import infoReducers from './infoReducers';

export default combineReducers({
    title:infoReducers
})
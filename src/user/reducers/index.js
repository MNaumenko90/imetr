/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import {combineReducers} from 'redux';

import current from './current';
import signup from './signup';
import errors from './errors';


export default combineReducers({
    current,
    signup,
    errors,
});

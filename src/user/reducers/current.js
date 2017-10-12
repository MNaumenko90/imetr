/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import {LOGIN, LOGOUT, CURRENT} from '../constants/actions';

function current(state = null, action) {
    switch (action.type) {
        case LOGOUT:
        case CURRENT:
        case LOGIN:
            return action.payload;
        default:
            return state;
    }
}

export default current;

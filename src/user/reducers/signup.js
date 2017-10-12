/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import {SIGNUP} from '../constants/actions';

function current(state = null, action) {
     switch (action.type) {
        case SIGNUP:
            return action.payload;
        default:
            return state;
    }
}

export default current;

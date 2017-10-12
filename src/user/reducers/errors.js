/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */


import {ERROR_USER_ADD, ERROR_USER_RM, ERROR_USER_RESET} from '../constants/actions';

let eid = 0;
function current(state = null, action) {
    switch (action.type) {
        case ERROR_USER_ADD:

            console.log('>>>>>>>>>>>', action.payload)

            let err = Object.assign({},action.payload, {eid: ++eid});
            return Array.isArray(state) ? state.concat(err) : [err];
        case ERROR_USER_RM:
            let eid = action.payload.eid;
            return Array.isArray(state) ? state.filter(v=>v.eid!==eid) : [];
        case ERROR_USER_RESET:
            let property = action.payload;
            return Array.isArray(state) && property ? state.filter(v=>v.property!==property) : [];
        default:
            return state;
    }
}

// const createGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
//     let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
// });

export default current;

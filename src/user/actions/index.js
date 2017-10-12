
import Parse from 'parse';

import {push, goBack} from 'react-router-redux';

import {ERROR_ALERT, SUCCESS_ALERT} from '../../common/constants/actions';
import {LOGIN, SIGNUP, LOGOUT, CURRENT, ACTION_ERRORS, ERROR_USER_ADD, ERROR_USER_RM, ERROR_USER_RESET} from '../constants/actions';

export const signUp = (username, password, attrs) => dispatch => {
    let user = new Parse.User;
    user.set('username',username);
    user.set('email',username);
    user.set('password', password);
    return user.save()

    // return Parse.User.signUp(username, password, attrs)
        .then(user => dispatch({type: SIGNUP, payload: user.toJSON()}))
        .catch(error=>_errorHandler(error, dispatch))
};

export const signIn = (username, password) => dispatch => {
    return Parse.User.logIn(username, password)
        .then(user => dispatch({type: LOGIN, payload: user.toJSON()}))
        .catch(error=>_errorHandler(error, dispatch))
};

export const logOut = () => dispatch => {
    return Parse.User.logOut()
        .then(reply =>dispatch({type: LOGOUT, payload: null}))
        .catch(error=>_errorHandler(error, dispatch))
};


export const getCurrent = () => dispatch => {
    return Promise.resolve(Parse.User.current())
        .then(user=> user ? user.fetch() : user)
        .then(user => dispatch({type: CURRENT, payload: user ? user.toJSON() : user}))
        .catch(error=>{
            //invalid session token
            if(error.code == 209){
                return logOut()(dispatch);
            }
            return Promise.reject(error);
        })
        .catch(error=>_errorHandler(error, dispatch))
};

export const setRememberMe = () => dispatch => {
    return Parse.Session.current()
        .then(ses=>{
            if(ses.id){
                ses.set('rememberMe', true)
                return ses.save()
            }
        })
        .catch(error=>_errorHandler(error, dispatch))
};

export const resendEmaliVerification = (email) => dispatch => {
    return Parse.Cloud.run('user:email:verification', {email})
        .catch(error=>_errorHandler(error, dispatch))
};

export const addError = (error) => dispatch => {
    return dispatch({type: ERROR_USER_ADD, payload: error });
};

export const rmError = (error) => dispatch => {
    return dispatch({type: ERROR_USER_RM, payload: error });
};

/**
 *
 * @param property optional
 */
export const resetErrors = (property) => dispatch => {
    return dispatch({type: ERROR_USER_RESET, payload: property });
};

const _errorHandler = (error, dispatch)  =>{
    let ae =  ACTION_ERRORS.find(v=>v.code == error.code);

    console.log(ae)

    if(ae){
        return dispatch({type: ERROR_USER_ADD, payload: ae });
    }

    console.log('Error ::', error);
    let message = error.message || "error";
    dispatch({type: ERROR_ALERT, payload:  {message}});
};


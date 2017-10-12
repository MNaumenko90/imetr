/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */


import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import SignUpForm from '../../components/Sign/FormSignUp';
import {signUp, addError, resetErrors, rmError} from '../../actions/index';

const mapStateToProps = (state) => ({
    errors: state.user.errors,
    userSignup: state.user.signup,
});

const mapDispatchToProps = (dispatch) => ({
    signUp: (username, password, attrs) => dispatch(signUp(username, password, attrs)),
    addError: (error) => dispatch(addError(error)),
    rmError: (error) => dispatch(rmError(error)),
    resetErrors: (propery) => dispatch(resetErrors(propery)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm))
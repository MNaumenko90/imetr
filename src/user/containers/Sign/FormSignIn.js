/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import SignInForm from '../../components/Sign/FormSignIn';
import {signIn, setRememberMe, addError, resetErrors, rmError} from '../../actions/index';

const mapStateToProps = (state) => ({
    errors: state.user.errors
});

const mapDispatchToProps = (dispatch) => ({
    signIn: (username, password) => dispatch(signIn(username, password)),
    setRememberMe: () => dispatch(setRememberMe()),
    addError: (error) => dispatch(addError(error)),
    rmError: (error) => dispatch(rmError(error)),
    resetErrors: (propery) => dispatch(resetErrors(propery)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm))
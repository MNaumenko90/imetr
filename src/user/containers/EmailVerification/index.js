import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import EmailVerification from '../../components/EmailVerification';
import {go} from '../../../common/actions';

import {resendEmaliVerification, addError, resetErrors, rmError} from '../../actions/index';

const mapStateToProps = (state, props) => {
    return {
        type: props.match.params.type,
        query: props.location.query,
        user: state.user.current,
        errors: state.user.errors,
    };
};

const mapDispatchToProps = (dispatch) => ({
    goLogin: () => dispatch(go('/user/sign/in')),
    resendEmaliVerification: (email) => dispatch(resendEmaliVerification(email)),
    addError: (error) => dispatch(addError(error)),
    rmError: (error) => dispatch(rmError(error)),
    resetErrors: (propery) => dispatch(resetErrors(propery)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailVerification));
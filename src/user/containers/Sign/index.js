import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Sign from '../../components/Sign';
import {go} from '../../../common/actions';

const mapStateToProps = (state, props) => ({
    type: props.match.params.type || 'in',
    user: state.user.current,
    userSignup: state.user.signup,
});

const mapDispatchToProps = (dispatch) => ({
    goLogin: () => dispatch(go('/user/sign/in')),
    goRegister: () => dispatch(go('/user/sign/up')),
    goMain: () => dispatch(go('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sign);
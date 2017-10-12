/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Main from '../components/Main';



const mapStateToProps = (state) => ({
    isAuthenticated: false,
});

const mapDispatchToProps = (dispatch) => ({
    hideAlert: () => dispatch(removeAlert()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

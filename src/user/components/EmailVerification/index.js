import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Success from './success';
import Fail from './fail';


const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '10px 45px'
    },
});

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes, type, errors, query, resendEmaliVerification , resetErrors, rmError, addError} = this.props;
        return <div>
            {type === 'success' && <Success/>}
            {type === 'fail' && <Fail
                email={query.username}
                resendEmaliVerification={resendEmaliVerification}
                resetErrors={resetErrors}
                rmError={rmError}
                addError={addError}
                errors={errors}
            /> }
        </div>
    }
}

Sign.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sign);
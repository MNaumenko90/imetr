import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '10px 45px'
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class EmailVerificationSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <h1> EMAIL ПОДТВЕРЖДЕН </h1>
                <Link to="/user/sign/in">
                    Войти на сайт
                </Link>
            </Paper>);
    }
}

EmailVerificationSuccess.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailVerificationSuccess);
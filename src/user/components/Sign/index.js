import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import {FormGroup, FormControlLabel} from 'material-ui/Form';

import FormSignIn from '../../containers/Sign/FormSignIn';
import FormSignUp from '../../containers/Sign/FormSignUp';

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

    componentDidMount(){
        if(this.props.user){
            this.props.goMain();
        }
    }

    componentWillReceiveProps(props) {
        if(props.user){
            this.props.goMain();
        }
    }

    handleChangeTab = (event, value) => {
        if (value === 'in') {
            this.props.goLogin();
        } else {
            this.props.goRegister(this.props.user);
        }
    };
    handleRadio = (event, value) => {
        this.props.goRegister(value);
    };

    render() {
        const {classes, type} = this.props;

        return (
            <Paper className={classes.root}>
                <Tabs value={type}
                      fullWidth
                      onChange={this.handleChangeTab}>
                    <Tab label="Вход" value="in" />
                    <Tab label="Регистрация" value="up"  />
                </Tabs>
                {type === 'in' && <FormSignIn/>}
                {type === 'up' && ( <FormSignUp/> )}
            </Paper>);
    }
}

Sign.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sign);
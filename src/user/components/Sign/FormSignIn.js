/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        marginTop: 0,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
        }
    },
    link: {},
    formInput:{}
});


class FormSignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rememberMe: false,
        };
    }

    handleChange = (name) => event => {
        if(this.hasError(name))
            this.props.resetErrors(name);
        return this.setState({[name]: event.target.value});
    };
    handleChangeCheckbox = (name) => event => {
        if(this.hasError(name))
            this.props.resetErrors(name);
        return this.setState({[name]: !this.state[name]});
    };
    handleSubmit = e => {
        e.preventDefault();
        let isValid = true;
        if (!this.state.username){
            this.props.addError({
                property: 'username',
                message: 'Обязательное поле',
            });
            isValid = false;
        }

        if (!this.state.password){
            this.props.addError({
                property: 'password',
                message: 'Обязательное поле',
            });
            isValid = false;
        }
        if (!isValid)
            return false;

        this.props.resetErrors();
        this.props.signIn(this.state.username, this.state.password)
            .then(()=>{
                return this.state.rememberMe ? this.props.setRememberMe(): undefined;
            });
        return false;
    };

    hasError = propName =>{
        return !!(this.props.errors||[]).find(v=>v.property === propName);
    };
    getErrorMessage = propName =>{
        let err = (this.props.errors||[]).find(v=>v.property === propName);
        if(!err)
            return;
        return err.message;
    };

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>

                <Typography type="caption" component="h3">
                    Вход в личный кабинет
                </Typography>

                <form onSubmit={this.handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField required
                                       fullWidth
                                       autoComplete="off"
                                       label="Ваш емеил"
                                       type="email"
                                       value={this.state.username}
                                       onChange={this.handleChange('username')}
                                       className={classes.formInput}
                                       error={this.hasError('username')}
                                       helperText={this.getErrorMessage('username')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required
                                       type="password"
                                       fullWidth
                                       label="Пароль"
                                       value={this.state.password}
                                       onChange={this.handleChange('password')}
                                       error={this.hasError('password')}
                                       helperText={this.getErrorMessage('password')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.rememberMe}
                                        onChange={this.handleChangeCheckbox('rememberMe')}
                                        value="rememberMe"
                                    />
                                }
                                label="Запомнить меня"/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Button raised type="submit" color="primary">
                                Войти
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Link to="/forgot">
                                <Typography type="body1" className={classes.link}>Забыли логин или пароль?</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

FormSignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    addError: PropTypes.func.isRequired,
    rmError: PropTypes.func.isRequired,
    resetErrors: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormSignIn);
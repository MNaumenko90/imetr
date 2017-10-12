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
        marginTop: 64,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
        }
    },
    buttons: {},
    formInput: {}
});


class FormSignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            newsSubscription: true,
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

        if (!isValid)
            return false;

        this.props.resetErrors();
        let attrs = {
            newsSubscription : this.state.newsSubscription,
            email: this.state.username,
        };
        this.props.signUp(this.state.username, this.state.password, attrs);
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
        const {classes, userSignup }= this.props;
        return (
            <div className={classes.root}>
                <Typography type="headline" component="h3">
                    Регистрация на iMetr.by
                </Typography>
                { userSignup ?
                    <Typography type="body2" component="p">
                        <br/>
                        <br/>
                        Вы успешно зарегистрированны.
                        <br/>
                        <br/>
                        Подтвердите регистрацию, кликнув по ссылке активации, отправленной в письме на
                        email: {userSignup.email}
                        <br/>
                        <br/>
                        После этого войдите на сайт
                        <br/>
                        <br/>
                    </Typography>
                    :<form onSubmit={this.handleSubmit}>
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
                                <TextField type="password"
                                           required
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
                                            checked={this.state.newsSubscription}
                                            onChange={this.handleChangeCheckbox('newsSubscription')}
                                            value="newsSubscription"
                                        />
                                    }
                                    label="Хочу получать новостную рассылку iMetr.by"/>
                            </Grid>
                            <Grid item xs={12} className={classes.buttons}>
                                <Button raised type="submit" color="primary">
                                    Зарегистрироваться
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                }
            </div>
        )
    }
}


FormSignUp.propTypes = {
    classes: PropTypes.object.isRequired,
    addError: PropTypes.func.isRequired,
    rmError: PropTypes.func.isRequired,
    resetErrors: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
};


export default withStyles(styles)(FormSignUp);
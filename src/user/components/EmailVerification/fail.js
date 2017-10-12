import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {FormGroup, FormControlLabel} from 'material-ui/Form';


const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '10px 45px'
    },
    buttons: {},
    formInput: {}
});

class EmailVerificationSuccess extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            sendSuccess: false
        };
    }
    componentDidMount(){
        let {email} = this.props;
        if(email){
            this.setState({email});
        }
    }

    handleChange = (name) => event => {
        if(this.hasError(name))
            this.props.resetErrors(name);
        return this.setState({[name]: event.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.resetErrors();
        this.props.resendEmaliVerification(this.state.email)
            .then(reply=>{
                if(reply === 'success')
                    this.setState({sendSuccess: true});
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
        const {classes} = this.props;

        return (
            <Paper className={classes.root}>
                <Typography type="headline" component="h3">
                    ОШИБКА ВЕРИФИКАЦИИ EMAIL
                </Typography>

                {this.state.sendSuccess ?
                    <Typography type="body2" component="h3">
                        Письмо отправлено
                    </Typography>
                    : <form onSubmit={this.handleSubmit}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField required
                                           fullWidth
                                           autoComplete="off"
                                           label="Ваш емеил"
                                           type="email"
                                           value={this.state.email}
                                           onChange={this.handleChange('email')}
                                           className={classes.formInput}
                                           error={this.hasError('email')}
                                           helperText={this.getErrorMessage('email')}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.buttons}>
                                <Button raised type="submit" color="primary">
                                    Повторно выслать ссылку
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                }
            </Paper>);
    }
}

EmailVerificationSuccess.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailVerificationSuccess);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Tabs, {Tab} from 'material-ui/Tabs';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import Divider from 'material-ui/Divider';
import FormSignIn from '../../../user/containers/Sign/FormSignIn';
import FormSignUp from '../../../user/containers/Sign/FormSignUp';


const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '10px 45px'
    },
    btnClose: {
        position: 'absolute',
        top: 0,
        right: 0,
    },

});


class DlgSign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab || 'in',
        };
    }

    handleChangeTab = (event, value) => {
        this.setState({activeTab: value});
    };

    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const { classes, ...other } = this.props;
        return (
            <Dialog className={classes.root} onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle>
                    <Tabs value={this.state.activeTab}
                          onChange={this.handleChangeTab}>
                        <Tab label="Вход" value="in" />
                        <Tab label="Регистрация" value="up"  />
                    </Tabs>
                    <Divider light />
                    <IconButton
                        className={classes.btnClose}
                        onClick={this.handleRequestClose}
                    >
                        <Icon>close</Icon>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                {this.state.activeTab === 'in' && <FormSignIn/>}
                {this.state.activeTab === 'up' && ( <FormSignUp/> )}
                </DialogContent>
            </Dialog>);
    }
}

DlgSign.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(DlgSign);
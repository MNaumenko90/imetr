import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import DlgSign from './dlgSign';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import DefaultLogo from './assets/images/logo_1.svg';
import MetrIcon from '../Icon';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

const styles = theme => ({
    button: {
        textTransform: 'none',
        display: 'block',
        border: '1px solid #b0b5b8',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        boxShadow:'none',
        float: 'right',
        borderRadius: 3,
    },
    quidel: {
        background: '#b0b5b8',
        overflow: 'hidden',
        transition: 'color 0.3s',
        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        '&:after': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            top: '1px',
            left: '1px',
            right: '1px',
            bottom: '1px',
            background: '#fff',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            background: '#1b2833',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            transform: 'translate3d(0, 100%, 0)',
            transition: 'transform 0.3s',
            transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        },
        '&:hover': {
            '&:before': {
                transform: 'translate3d(0, 0, 0)',
            },
        },
    },
    root: {
        margin: '0 auto',
        maxWidth: '1200px',
        width: '100%',
    },
    appEdit: {
        backgroundColor: '#1d2d36',
        boxShadow:'none',
        padding:'3px 0',
    },
    list: {
        width: 250,
    },
    listFull: {
        width: 'auto',
    },
    citySelect: {
        cursor:'pointer',

    },
    linksHeader: {
        color:'#fff',
        outline:'none',
        textDecoration:'underline',
        '& p': {
            display:'inline-block',
            textDecoration:'underline',
        },
    },
    menu: {
        display:'flex',
        justifyContent: 'space-around',
        borderLeft:'1px solid #eee',
        alignItems: 'center',
        marginLeft:'20px',
        [theme.breakpoints.down('xs')]: {
            flexDirection:'column',
            marginLeft:'0px',
        }
    },
    menuItem: {
        textTransform: 'uppercase',
        color:'#1d2d36',
        textDecoration: 'none',
        padding: '22px 0',
        fontSize:'13px',
        transition: 'color .3s ease-in',
        display:'inline-block',
        position:'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '20px',
            bottom: '0px',
            height: '2px',
            width: '0px',
            left: '0',
            backgroundColor: '#92b7eb',
            transition: 'width .3s ease-in',
        },
        '&:hover': {
            color:'#92b7eb',
            transition: 'color .3s ease-in',
            '&:after': {
                content: '""',
                width: '100%',
                transition: 'width .3s ease-in',
            }
        },
    },
    badgeFavorite: {
        display: 'inline-block',
        color: '#fff',
        '& > span:before': {
            textDecoration:'none',
        }
    },
    account: {
        borderLeft: '1px solid #151f24',
        borderRight: '1px solid #151f24',
        textAlign: 'center',
        '& > span': {
            verticalAlign:'middle',
            marginRight:'10px',
        }
    },
    heartBgr: {
        marginRight:'10px',
        display:'inline-block',
    },
    location: {
        marginRight:'10px',
        display:'inline-block',
        color:'#fff',
    },
    search: {
        color:'#fff',
        float:'right',
    },

});

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
    };
};
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignOpen: false
        };
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    onClickSign = (e)=>{
        let {width} = this.props;
        //if mobile
        if(['xs'].indexOf(width)>=0)
            return true;
        e.preventDefault();
        this.setState({ isSignOpen: true});
        return false;
    };

    onCloseSignDlg = (e)=>{
        this.setState({ isSignOpen: false});
    };

    onClickLogout = (e)=>{
        e.preventDefault();
        this.props.logOut();
        return false;
    };

    render() {
        const {classes} = this.props;

        const fullList = (
            <div className={classes.listFull}>
                <List>aaa</List>
                <List>bbb</List>
            </div>
        );
        const { value } = this.state;

        return (
            <div>

                <AppBar position="static" className={classes.appEdit}>
                        <Grid container spacing={8} className={classes.root}>
                            <Grid item xs={6} sm={8}>
                                <div onClick={this.toggleDrawer('top', true)} className={classes.citySelect}>
                                    <MetrIcon className={classes.location}>location</MetrIcon>
                                    <Typography type="caption" className={classes.linksHeader}>Гродно</Typography>
                                </div>
                                <Drawer anchor="top" open={this.state.top} onRequestClose={this.toggleDrawer('top', false)}>
                                    <div tabIndex={0} role="button" onClick={this.toggleDrawer('top', false)}>
                                        {fullList}
                                    </div>
                                </Drawer>
                            </Grid>
                            <Grid item xs={6} sm={1}>
                                <Link to="/" className={classes.badgeFavorite} type="caption">
                                    <MetrIcon className={classes.heartBgr}>heart2</MetrIcon>
                                    <Typography type="caption" className={classes.linksHeader}>10</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={8} sm={2} className={classes.account}>

                                {this.props.user ?
                                    <Link to="/user/logout" onClick={this.onClickLogout} type="caption" className={classes.linksHeader}>
                                        <MetrIcon className={classes.location}>user</MetrIcon>
                                        <Typography type="caption">Выйти</Typography>
                                    </Link>
                                    :
                                    <Link to="/user/sign" onClick={this.onClickSign} type="caption" className={classes.linksHeader}>
                                        <MetrIcon className={classes.location}>user</MetrIcon>
                                    <Typography type="caption" component={"p"}>Вход и регистрация</Typography>
                                    </Link>
                                }
                                {this.props.user ? undefined :
                                    <DlgSign
                                        onRequestClose={this.onCloseSignDlg}
                                        open={this.state.isSignOpen}
                                    />
                                }
                            </Grid>
                            <Grid item xs={4} sm={1}>
                                <MetrIcon className={classes.search}>search</MetrIcon>
                            </Grid>
                        </Grid>
                </AppBar>
                <div className={classes.subHeader}>
                    <Grid container spacing={0} className={classes.root} align={'center'}>
                        <Grid item xs={12} sm={2}>
                            <Link to="/" className={classes.logo}>
                                <img src={DefaultLogo} alt={'iMetr'}/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <nav className={classes.menu}>
                                <Link to="/" className={classes.menuItem}>
                                    <Typography type="caption">Аренда</Typography>
                                </Link>
                                <Link to="/" className={classes.menuItem}>
                                    <Typography type="caption">Продажа</Typography>
                                </Link>
                                <Link to="/" className={classes.menuItem}>
                                    <Typography type="caption">Новостройки</Typography>
                                </Link>
                                <Link to="/" className={classes.menuItem}>
                                    <Typography type="caption">Коммерческая</Typography>
                                </Link>
                                <Link to="/" className={classes.menuItem}>
                                    <Typography type="caption">Посуточно</Typography>
                                </Link>
                            </nav>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                + Добавить обьявление
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
};
TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default Header;
export default compose(withStyles(styles), withWidth())(Header);
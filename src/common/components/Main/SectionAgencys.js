import React, {Component} from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import logoAg from './assets/images/logoAg.png';
import fotoAg from './assets/images/fotoAgent.png';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import MetrIcon from '../Icon';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';



const styles = theme => ({
    greyBg: theme.greyBg,
    root: {
        margin: '0 auto',
        maxWidth: '1200px',
        width: '100%',
    },
    inputWrap: {
        position:'relative',
    },
    input: {
        position:'relative',
        marginTop:'22px',
        marginBottom:'30px',
        width: '100%',
        '&:before': {
            content:`'\\e935'`,
            fontFamily: 'imetr',
            position:'absolute',
            display:'block',
            height:0,
            top: '17px',
            left: '22px',
        }
    },
    inputButton: {
        verticalAlign:'middle',
        position:'absolute',
        top:'23px',
        right:0,
    },

    inputIcon: {
        color:'#5b86e5',
        fontSize:25,
    },
    agencyBox: {
        display:'flex',
        marginTop:'18px',
        marginBottom:'30px',
        justifyContent:'flex-start',
        minHeight:'114px',
    },
    mediaBoxCol: {
        backgroundRepeat:'no-repeat',
        flex:'0 0 auto',
        width:'27%',
        [theme.breakpoints.down('md')]: {
            width:'24%',
        }
    },
    mediaBox: {
        backgroundImage: `url(${logoAg})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'37px 50px',
        flex:'0 0 50%',
    },
    mediaBox2: {
        backgroundPosition:'37px -68px',
    },
    mediaBox3: {
        backgroundPosition:'37px -179px',
    },
    mediaBox7: {
        backgroundImage: `url(${fotoAg})`,
        backgroundPosition:'20px 23px',
    },
    descrBox: {
        padding:'20px 0',
        flex:'0 0 50%',
    },
    rate: {
        marginTop:'12px',
        '& a.is-active': {
            color:'#ffe26f',
        },
        '& > span': {
            color:'#9299a2',
            display:'inline-block',
            marginLeft: '10px',
        },
    },
    rateRight: {
        textAlign:'right',
        paddingRight:'10px',
    },
});

class SectionAgencysComp extends Component {

    render() {
        const {classes} = this.props;
        return (
                <section className={classNames(classes.greyBg)}>
                    <Typography type="display1" align={'center'}>
                        Агентства и застройщики
                    </Typography>
                    <Grid container spacing={0} className={classes.root} justify={'center'}>
                        <Grid item xs={12} sm={8}>
                            <div className={classes.inputWrap}>
                                <Input
                                    placeholder="Введите название агенства или застройщика"
                                    className={classes.input}
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                                <Button dense className={classNames(classes.button,classes.inputButton)}>
                                    <MetrIcon className={classes.inputIcon}>next</MetrIcon>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} className={classes.root} style={{}}>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography type="body2" align={'center'} component="p">
                                Агентства
                            </Typography>
                            <Paper className={classes.agencyBox}>
                                <div className={classes.mediaBox}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater total={5} rating={2} />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox2)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater total={5} rating={2} />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox3)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater total={5} rating={2} />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                Все агентства
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography type="body2" align={'center'} component="p">
                                Застройщики
                            </Typography>
                            <Paper className={classes.agencyBox}>
                                <div className={classes.mediaBox}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater total={5} rating={2} />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox2)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater total={5} rating={2} />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox3)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater total={5} rating={2} />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                Все застройщики
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography type="body2" align={'center'} component="p">
                                Риэлтеры и агенты
                            </Typography>
                            <Paper className={classes.agencyBox}>
                                <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}></div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Евгений Мальгин
                                    </Typography>
                                    <Typography component="small">
                                        АН “Твоя столица”
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 квартир в 1 ЖК
                                    </Typography>
                                </div>
                                <div className={classNames(classes.rate,classes.rateRight)}>
                                    <Rater total={5} rating={2} />
                                    <Typography type="caption" component="span">4 из 5</Typography>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox}>
                                <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Евгений Мальгин
                                    </Typography>
                                    <Typography component="small">
                                        АН “Твоя столица”
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 квартир в 1 ЖК
                                    </Typography>
                                </div>
                                <div className={classNames(classes.rate,classes.rateRight)}>
                                    <Rater total={5} rating={2} />
                                    <Typography type="caption" component="span">4 из 5</Typography>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox}>
                                <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="button" component="p">
                                        Евгений Мальгин
                                    </Typography>
                                    <Typography component="small">
                                        АН “Твоя столица”
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 квартир в 1 ЖК
                                    </Typography>
                                </div>
                                <div className={classNames(classes.rate,classes.rateRight)}>
                                    <Rater total={5} rating={2} />
                                    <Typography type="caption" component="span">4 из 5</Typography>
                                </div>
                            </Paper>
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                Риэлтеры и агенты
                            </Button>
                        </Grid>
                    </Grid>
                </section>
        );
    };
};

// export default Main;
export default compose(withStyles(styles), withWidth())(SectionAgencysComp);



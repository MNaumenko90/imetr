import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import MetrIcon from '../Icon';




const styles = theme => ({
    gradientBg: theme.gradientBg,
    root: theme.root,
    shadowBottom: {
        boxShadow: '0 -15 30 rgba(146, 153, 162, 0.2)',
    },
    addedBox: {
        display:'flex',
        '& > span': {
            color:'#5b86e5',
            fontSize:'70px',
        },
        '& > div': {
            marginLeft:42,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
        '& > div > p': {
            marginBottom:15,
            lineHeight: '24px',
        },
    },
});

class SectionProposeComp extends Component {
    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.gradientBg,classes.shadowBottom)}>
                <Grid container spacing={16} className={classes.root} style={{}}>
                    <Grid item xs={12} sm={6} className={classes.addedBox}>
                        <MetrIcon>add</MetrIcon>
                        <div>
                            <Typography type="body2" component="p">
                                Размещайте объявления
                            </Typography>
                            <Typography type="caption" component="p">
                                Новая форма подачи позволит быстро и удобно <br/>разместить объявление
                            </Typography>
                            <Button raised color="primary" className={classes.button}>
                                Разместить объявление
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.addedBox}>
                        <MetrIcon>rocket2</MetrIcon>
                        <div>
                            <Typography type="body2" component="p">
                                Ускоряйте сделки
                            </Typography>
                            <Typography type="caption" component="p">
                                Премиум-размещение увеличивает количество <br/>звонков в 3 раза
                            </Typography>
                            <Button raised color="primary" className={classes.button}>
                                Купить премиум
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </section>
        );
    };
};


export default compose(withStyles(styles), withWidth())(SectionProposeComp);



import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';

// images
import LogoComp from './assets/images/logoComp.png';
import FilterImg from './assets/images/filter-bg.png';


const styles = theme => ({
    root: theme.root,
    filterMain: {
        backgroundImage: `url(${FilterImg})`,
        width:'100%',
        minHeight: '453px',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        position:'relative',
    },
    filterTitle: {
        color: '#ffffff',
        padding:'30px',
        textAlign:'center',
    },
    filterWrap: {
        borderRadius: 3,
        backgroundColor: '#1b2833',
        opacity: 0.8,
        [theme.breakpoints.down('xs')]: {
            margin:'0px',
        }
    },
    someFilter: {
        minWidth: 900,
        height: 58,
        borderRadius: 3,
        backgroundColor: '#ffffff',
        textAlign:'right',
        [theme.breakpoints.down('xs')]: {
            minWidth: '100%',
        }
    },
    filterDesc: {
        padding:'30px 0px',
        margin:'30px auto 0',
        minWidth: '700px',
        background: 'linear-gradient(to right, rgba(249,220,177,0) 0%,rgba(216,182,152,0.3) 50%,rgba(249,220,177,0) 100%)',
        textAlign:'center',
        '&:before': {
            content:'""',
            display:'block',
            width:'100%',
            height:'2px',
            background: 'linear-gradient(to right, rgba(249,220,177,0) 0%,rgba(216,182,152,0.3) 50%,rgba(249,220,177,0) 100%)',
            position:'absolute',
            top:0,
            left:0,
        },
        [theme.breakpoints.down('md')]: {
            minWidth: '100%',
        }
    },
    descText: {
        color:'#fff',
    },
});


function TabContainer(props) {
    return <div style={{ padding: 20 }}>{props.children}</div>;
}

class SectionSearchComp extends Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const {classes} = this.props;
        const { value } = this.state;

        return (
            <section className={classes.filterMain}>
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={12}>
                        <Typography type="display1" className={classes.filterTitle}>Вся недвижимость Беларуси на iMetr.by</Typography>
                        <div className={classes.filterWrap}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                centered
                            >
                                <Tab label="Продажа" />
                                <Tab label="Аренда" />
                                <Tab label="Новостройки" />
                            </Tabs>
                            {value === 0 && <TabContainer>{<div className={classes.someFilter}>
                                <Button raised color="primary" className={classes.button}>
                                    Найти
                                </Button>
                            </div>}</TabContainer>}
                            {value === 1 && <TabContainer>{
                                <div className={classes.someFilter}>
                                    <Button raised color="primary" className={classes.button}>
                                        Найти
                                    </Button>
                                </div>
                            }</TabContainer>}
                            {value === 2 && <TabContainer>{
                                <div className={classes.someFilter}>
                                    <Button raised color="primary" className={classes.button}>
                                        Найти
                                    </Button>
                                </div>
                            }</TabContainer>}
                        </div>
                        <div className={classes.filterDesc}>
                            <img src={LogoComp} alt={'ТАПАС'}/>
                            <Typography type="body1" className={classes.descText}>ЖК «Олимпик-Парк»</Typography>
                            <Typography type="caption" className={classes.descText}>В продаже 600 квартир по цене от 1 922 620 </Typography>
                            <Button raised color="contrast" className={classes.button}>
                                Подробнее
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </section>
        );
    };
};


export default compose(withStyles(styles), withWidth())(SectionSearchComp);



import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

// Components
import ImageGalleryComp from './ImageGallery';


const styles = theme => ({
    root: theme.root,
    gradientBg: theme.gradientBg,
    mainSlide: {
        position:'relative',
    },
    slideItem: {
        display:'block',
        '&:hover .image-gallery': {
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        },
    },
    labelContainer : {
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    label: {
      color: 'red',
    }
});


function TabContainer(props) {
    return <div>{props.children}</div>;
}

class SectionPopularComp extends Component {
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
            <section className={classes.gradientBg}>
                <Typography type="display1" align={'center'}>
                    Популярные объявления
                </Typography>
                <Grid container spacing={0} className={classes.root} style={{}}>
                    <Grid item xs={12}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                            <span>Продажа</span>
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                className={classes.mainSlide}
                                textColor="primary"
                            >
                                <Tab label="Квартиры" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                }} />
                                <Tab label="Комнаты" />
                                <Tab label="Дома" />
                                <Tab label="Офисы" href="#basic-tabs" />
                            </Tabs>
                        </div>
                    </Grid>
                </Grid>
                <Divider light />
                <Grid container spacing={0} className={classes.root} style={{}}>
                    <Grid item xs={12}>
                        {value === 0 && <TabContainer>
                            <Grid container spacing={40} className={classes.root} style={{}}>
                                <Grid item xs={12} sm={4} className={classes.slideItem}>
                                    <ImageGalleryComp/>
                                </Grid>
                            </Grid>
                        </TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                        {value === 2 && <TabContainer>Item Three</TabContainer>}
                        {value === 3 && <TabContainer>Item Three</TabContainer>}
                    </Grid>
                </Grid>
            </section>
        );
    };
};

export default compose(withStyles(styles), withWidth())(SectionPopularComp);
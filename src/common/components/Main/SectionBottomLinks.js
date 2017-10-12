import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

// Components
import TabNavComp from './TabNav';


const styles = theme => ({
    root: theme.root,
    footerTabs: {
        borderBottom:'1px solid #e1e1e1',
        borderTop:'1px solid #e1e1e1',
    },
});


function TabContainer(props) {
    return <div>{props.children}</div>;
}

class SectionBottomLinksComp extends Component {
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
            <section className={classes.footerTabs}>
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={12}>
                        <Tabs value={value} onChange={this.handleChange} className={classes.bottomTabs}>
                            <Tab label="Квартиры у метро" />
                            <Tab label="Квартиры в районе" />
                            <Tab label="Квартиры в городах" />
                            <Tab label="Популярное" href="#basic-tabs" />
                        </Tabs>
                    </Grid>
                </Grid>
                <Divider light />
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={12}>
                        {value === 0 && <TabContainer><TabNavComp/></TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                        {value === 2 && <TabContainer>Item Three</TabContainer>}
                        {value === 3 && <TabContainer>Item Four</TabContainer>}
                    </Grid>
                </Grid>
            </section>
        );
    };
};


export default compose(withStyles(styles), withWidth())(SectionBottomLinksComp);
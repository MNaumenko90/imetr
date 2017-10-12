import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import {Link} from 'react-router-dom';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    tabsMenu: {
        lineHeight: '30px',
        '& a': {
            display:'block',
            color: '#519be2',
        },
    },
    viewAllMenu: {
        '& span': {
            textDecoration: 'underline',
        },
    },
});

class TabNavComp extends Component {

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={16} className={classes.root}>
                <Grid item xs={12} sm={3}>
                    <div className={classes.tabsMenu}>
                        <Link to='/'>
                            <Typography type="caption">
                                Авиамоторная
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Верхние котлы
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Коптево
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Мякинино
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Пражская
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Таганская
                            </Typography>
                        </Link>
                        <Link to='/' className={classes.viewAllMenu}>
                            <Typography type="caption">
                                Показать все станции
                            </Typography>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className={classes.tabsMenu}>
                        <Link to='/'>
                            <Typography type="caption">
                                Автозаводская
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Владыкино
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Котельники
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Нагатинская
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Преображенская площадь
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Тверская
                            </Typography>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className={classes.tabsMenu}>
                        <Link to='/'>
                            <Typography type="caption">
                                Академическая
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Водный стадион
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Красногвардейская
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Нагорная
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Пролетарская
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Театральная
                            </Typography>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className={classes.tabsMenu}>
                        <Link to='/'>
                            <Typography type="caption">
                                Александровский сад
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Войковская
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Краснопресненская
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Нахимовский проспект
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Проспект Вернадского
                            </Typography>
                        </Link>
                        <Link to='/'>
                            <Typography type="caption">
                                Текстильщики
                            </Typography>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        );
    };
};


// export default Main;
export default compose(withStyles(styles), withWidth())(TabNavComp);



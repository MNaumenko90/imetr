import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import {Link} from 'react-router-dom';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import MetrIcon from '../Icon';
import Typography from 'material-ui/Typography';


// images
import ListImg1 from './assets/images/listImg1.png';
import ListImg2 from './assets/images/listImg2.png';
import ListImg3 from './assets/images/listImg3.png';
import ListImg4 from './assets/images/listImg4.png';
import ListImg5 from './assets/images/listImg5.png';
import ListImg6 from './assets/images/listImg6.png';



const styles = theme => ({
    root: theme.root,
    greyBg: theme.greyBg,
    gridList: {
        columnWidth: '350px',
        columnGap: '0px',
        boxSizing:'border-box',
        display: 'block',
        overflow: 'inherit',

    },
    listButtons: {
        display: 'flex',
        justifyContent: 'space-around',
        '& > a': {
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            borderRadius: 3,
            backgroundImage: 'linear-gradient(45deg, #519be2 0%, #36d1dc 100%)',
            margin:0,
            flex: '0 0 48%',
            color:'#fff',
            textDecoration:'none',
            textAlign:'center',
            padding:'44px 0',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            transition: 'color 0.4s',
            '& > p': {
                color:'#fff',
                fontSize:'20px',
                textTransform:'uppercase',
                marginTop:'22px',
            },
            '& > span': {
                fontSize:'45px',
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                height: '100%',
                width: '100%',
                bottom: '100%',
                left: 0,
                zIndex: -1,
                transition: 'transform 0.4s',
                transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
                background: '#5b86e5',
            },
            '&:before': {
                content: '""',
                position: 'absolute',
                height: '100%',
                width: '100%',
                bottom: '100%',
                left: 0,
                zIndex: -1,
                transition: 'transform 0.4s',
                transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
                background: '#36d1dc',
            },
            '&:hover': {
                '&:before': {
                    transform: 'translate3d(0, 100%, 0)',
                },
                '&:after': {
                    transform: 'translate3d(0, 100%, 0)',
                    transitionDelay: '0.175s',
                },
            },
        },
    },
});

const tileData = [
    {
        img: ListImg1,
        title: '5 уловок туристических фирм, чтобы вы переплачивали',
        style: {
            alignItems: 'flex-end',
        }
    },
    {
        img: ListImg2,
        title: 'Markswebb назвал самые эффективные сайты банков для малого бизнеса',
        subtitle:'Мифы и правда о настоящих банков',
        rows: 2,
        style: {
            alignItems: 'flex-start',
        }
    },
    {
        img: ListImg3,
        title: 'Как изменится рынок ипотеки расскажут на конференции 25 июля',
        subtitle:'Все о недвижимостив Беларуси',
        rows: 2,
        style: {
            alignItems: 'flex-start',
        }
    },
    {
        img: ListImg4,
        title: 'Получите шанс выиграть 1 000 рублей на оплату электроэнергии',
        style: {
            alignItems: 'flex-end',
        }
    },
    {
        img: ListImg5,
        title: 'Фотопроект «Крыши Минска». Самые дорогие виды столицы и задорная девушка в ',
        style: {
            alignItems: 'flex-end',
        }
    },
    {
        img: ListImg6,
        title: 'На набережной возле Дворца спорта в Минске хотят построить самое большое колесо обозрения в стране',
        style: {
            alignItems: 'flex-end',
        }
    },
    {
        buttons: true,

    },
];

class SectionMasonryComp extends Component {

    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.greyBg)}>
                <Typography type="display1" align={'center'}>
                    Статьи и новости мира недвижимости
                </Typography>
                <Grid container spacing={0} className={classes.root} style={{}}>
                    <Grid item xs={12}>
                        <GridList cellHeight={180} className={classes.gridList} cols={1}>
                            {tileData.map((tile, index) => (
                                <GridListTile key={index} cols={tile.cols || 1} rows={tile.rows || 1} style={{display:'inline-block'}}>
                                    {tile.buttons ?
                                        <div className={classes.listButtons}>
                                            <Link to="/">
                                                <MetrIcon>analitics</MetrIcon>
                                                <Typography component="p">Аналитика</Typography>
                                            </Link>
                                            <Link to="/">
                                                <MetrIcon>news</MetrIcon>
                                                <Typography component="p">Все новости</Typography>
                                            </Link>
                                        </div>
                                        :
                                        <img src={tile.img} alt={tile.title} />
                                    }
                                    {tile.buttons ? "" : <Link to='/'><GridListTileBar style={tile.style} title={tile.title} subtitle={tile.subtitle} /></Link>}
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                </Grid>
            </section>

        );
    };
};

export default compose(withStyles(styles), withWidth())(SectionMasonryComp);



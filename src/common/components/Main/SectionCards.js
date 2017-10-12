import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import {Link} from 'react-router-dom';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import MetrIcon from '../Icon';

// images
import ImgCard1 from './assets/images/img-1.png';
import ImgCard2 from './assets/images/img-2.png';
import ImgCard3 from './assets/images/img-3.png';
import ImgCard4 from './assets/images/img-4.png';
import ImgCard5 from './assets/images/searchInMap.png';



const styles = theme => ({
    gradientBg: theme.gradientBg,
    root: theme.root,
    card: {
        display:'flex',
        height:'100%',
    },
    cardRtl: {
        flexDirection:'row-reverse',
    },
    media: {
        minHeight: 253,
        position:'relative',
        flex:'0 0 50%',
        '&:before': {
            content:'""',
            display:'block',
            width:'70px',
            height:'100%',
            position:'absolute',
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
            top:0,
            left:0,
            zIndex:2,
        },
    },
    mediaRtl: {
        '&:before': {
            content:'""',
            display:'block',
            width:'70px',
            height:'100%',
            position:'absolute',
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)',
            top:0,
            right:0,
            left: 'inherit',
            zIndex:2,
        },
    },
    cardContent: {
        flex:'0 0 50%',
        padding:'0 0 0 0',
        '& > div': {
            padding : '30px 10px 30px 30px',
            lineHeight:1.5,
        },
        '& > div > p': {
            marginBottom:'17px',
        },
    },
    noneMedia: {
        flex:'0 0 100%',
        display: 'flex',
        alignItems: 'center',
    },
    searchInMap: {
        background: `url(${ImgCard5}) no-repeat`,
        backgroundSize: 'cover',
        flex:'0 0 100%',
        position:'relative',
        '&:before': {
            content:'""',
            position:'absolute',
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #ffffff 50%, rgba(255, 255, 255, 0) 100%)',
            height:'100%',
            width:'100%',
            top:0,
            left:0,
            zIndex:2,
        },
        '& > div': {
            textAlign:'center',
            position:'relative',
            zIndex:3,
            padding:'35px 0 22px 0',
        },
    },
    searchMap : {
        color:'#5b86e5',
        fontSize: '45px',
        marginBottom:'15px',
        display: 'inline-block',
    },
    cardLink: {
        textDecoration:'none',
        color:'#519be2',
        '& > span > span': {
            color:'#9299a2',
        }
    },
});




class SectionCardsComp extends Component {
    render() {
        const {classes} = this.props;

        return (
            <section className={classNames(classes.gradientBg)}>
                <Grid container spacing={16} className={classes.root}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card,classes.cardRtl)}>
                            <CardMedia
                                className={classes.media}
                                image={ImgCard1}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Купить квартиру
                                    </Typography>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            1-комнатные <span>41 988</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            2-комнатные  <span>52 362</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            3-комнатные <span>40 304</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Свободная планировка  <span>1 286</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Квартиры-студии <span>1 002</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Комнаты в квартире <span>2 142</span>
                                        </Typography>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card,classes.cardRtl)}>
                            <CardMedia
                                className={classes.media}
                                image={ImgCard2}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Снять квартиру
                                    </Typography>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            1-комнатные <span>41 988</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            2-комнатные  <span>52 362</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            3-комнатные <span>40 304</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Свободная планировка  <span>1 286</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Квартиры-студии <span>1 002</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Комнаты в квартире <span>2 142</span>
                                        </Typography>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardMedia
                                className={classNames(classes.media,classes.mediaRtl)}
                                image={ImgCard3}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Новостройки
                                    </Typography>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Каталог ЖК <span>419 </span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Сданные новостройки  <span>522</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Строящиеся новостройки <span>404 </span>
                                        </Typography>
                                    </Link><br/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardMedia
                                className={classNames(classes.media,classes.mediaRtl)}
                                image={ImgCard4}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Коммерческая  недвижимость
                                    </Typography>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Купить склад <span>419 </span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Купить офис  <span>522</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Арендовать помещение <span>404 </span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Арендовать офис <span>522 </span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Арендовать склад <span>404 </span>
                                        </Typography>
                                    </Link><br/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardContent className={classNames(classes.cardContent,classes.noneMedia)}>
                                <div>
                                    <Typography component="p">
                                        Объекты на карте
                                    </Typography>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Продажа квартир <span>419</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Продажа комнат  <span>522</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Продажа комнат <span>404</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Продажа дач  <span>419</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Продажа офисов  <span>522</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Продажа складов <span>404</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Продажа торговых помещений <span>404</span>
                                        </Typography>
                                    </Link><br/>
                                </div>
                                <div>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Аренда квартир <span>419</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Аренда комнат  <span>522</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Аренда  дома <span>404</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Аренда офисов  <span>522</span>
                                        </Typography>
                                    </Link><br/>
                                    <Link to="/" className={classes.cardLink}>
                                        <Typography type="caption">
                                            Аренда торговых помещений <span>404</span>
                                        </Typography>
                                    </Link><br/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardContent className={classNames(classes.cardContent,classes.searchInMap)}>
                                <div>
                                    <MetrIcon className={classes.searchMap}>map</MetrIcon>
                                    <Typography type="body2" component="p">
                                        Поиск на карте
                                    </Typography>
                                    <Typography  type="caption" component="p">
                                        Ищите новостройки рядом с работой, <br/>парком или родственниками
                                    </Typography>
                                    <Button raised className={classNames(classes.button,classes.quidel)}>
                                        Найти на карте
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </section>
        );
    };
};


export default compose(withStyles(styles), withWidth())(SectionCardsComp);



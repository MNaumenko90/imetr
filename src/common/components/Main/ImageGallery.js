import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';
import MetrIcon from '../Icon';
import {Link} from 'react-router-dom';

// images
import SlideItem from './assets/images/slideItem.jpg';



const styles = theme => ({
    slideDesc: {
        paddingTop:'15px',
        '& span': {
            color: '#9299a2',
            fontSize: 16,
        },
    },
    slidePrice: {
        marginBottom:'15px',
        '& span': {
            marginLeft:50,
        },
    },
    slideAdress: {
        marginTop:'11px',
        '& span': {
            marginRight:50,
        },
        '& span > span': {
            marginRight:10,
        },
        '& a': {
            textDecoration:'none',
            color:'#519be2',
        },
    },
    itemSlDesc: {
        textTransform:'none',
        fontWeight: 300,
    },

});

const images = [
    {
        original: SlideItem,
    },
    {
        original: SlideItem,
    },
    {
        original: SlideItem,
    }
];


class ImageGalleryComp extends Component {
    render() {
        const {classes} = this.props;
        return (
                <div onClick="">
                    <ImageGallery
                        items={images}
                        slideInterval={2000}
                        infinite={true}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                    <div className={classes.slideDesc}>
                        <Typography type="body2" component={"p"} className={classes.slidePrice}>
                            302 846 р.
                            <span>
                                1 258 р/м2
                            </span>
                        </Typography>
                        <Typography type="button" component={"p"} className={classes.itemSlDesc}>
                            3-комн. кв. в Минске,  148 м2
                        </Typography>
                        <Typography component={"p"} className={classes.slideAdress}>
                            <span>
                                <MetrIcon>location</MetrIcon>
                                ул. Буденого, д.25
                            </span>
                            <Link to='/'>на карте</Link>
                        </Typography>
                    </div>
                </div>
        );
    };
}

export default compose(withStyles(styles), withWidth())(ImageGalleryComp);



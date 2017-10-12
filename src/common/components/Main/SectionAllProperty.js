import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

// images
import aboutBg from './assets/images/aboutBg.png';

const styles = theme => ({
    gradientBg: {
        backgroundImage: 'linear-gradient(to top, #ffffff 0%, #e9eeee 100%)',
        padding:'60px 0',
    },
    root: theme.root,
    aboutText: {
        marginTop:39,
        lineHeight: '24px',
    },
});

class SectionAllPropertyComp extends Component {

    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.gradientBg)}>
                <Typography type="display1" align={'center'}>
                    Вся недвижимость Беларуси у нас
                </Typography>
                <Grid container spacing={16} className={classes.root} style={{}}>
                    <Grid item xs={12} sm={6}>
                        <img src={aboutBg} alt={'iMetr'}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography type="caption" component="p" className={classes.aboutText}>
                            Купить или снять недвижимость — задача несложная, если знать,
                            где искать и с чего начать поиски. Чтобы арендовать или купить недвижимость,
                            не нужно ехать в агентство. Достаточно отыскать чистую профессиональную
                            базу объявлений о продаже или аренде недвижимости в Москве.
                        </Typography>
                        <Typography type="caption" component="p" className={classes.aboutText}>
                            Если вы решили продать или купить квартиру, снять или сдать жилую
                            недвижимость или находитесь в поисках загородной или коммерческой
                            недвижимости, то ЦИАН поможет вам! ЦИАН.ру — это самый удобный сайт
                            для поиска недвижимости по точному адресу или по карте, с учётом всех
                            интересующих вас параметров. На CIAN.RU — тысячи актуальных объявлений о
                            продаже или аренде объектов недвижимости в Москве и по всей России, ежедневно
                            на сайте появляются новые объявления. Объявления содержат описания объектов,
                            информацию об инфраструктуре, фотографии, стоимость, контакты владельца.
                        </Typography>
                    </Grid>
                </Grid>
            </section>
        );
    };
};

// export default Main;
export default compose(withStyles(styles), withWidth())(SectionAllPropertyComp);



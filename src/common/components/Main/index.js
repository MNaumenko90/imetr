import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';

// Components
import SectionAgencysComp from './SectionAgencys';
import SectionAllPropertyComp from './SectionAllProperty';
import SectionProposeComp from './SectionPropose';
import SectionMasonryComp from './SectionMasonry';
import SectionCardsComp from './SectionCards';
import SectionSearchComp from './SectionSearch';
import SectionPopularComp from './SectionPopular';
import SectionBottomLinksComp from './SectionBottomLinks';

const styles = theme => ({
    // quidel: {
    //     background: 'none',
    //     border: '1px solid #b0b5b8',
    //     overflow: 'hidden',
    //     transition: 'color 0.3s',
    //     position: 'relative',
    //     zIndex: 1,
    //     boxShadow:'none',
    //     textTransform: 'none',
    //     borderRadius: 3,
    //     transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
    //     display: 'block',
    //     margin: '0 auto',
    //     '&:after': {
    //         content: '""',
    //         position: 'absolute',
    //         zIndex: -1,
    //         top: '1px',
    //         left: '1px',
    //         right: '1px',
    //         bottom: '1px',
    //         background: '#fff',
    //     },
    //     '&:before': {
    //         content: '""',
    //         position: 'absolute',
    //         zIndex: -1,
    //         background: '#1b2833',
    //         top: '0',
    //         left: '0',
    //         width: '100%',
    //         height: '100%',
    //         transform: 'translate3d(0, 100%, 0)',
    //         transition: 'transform 0.3s',
    //         transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
    //     },
    //     '&:hover': {
    //         '&:before': {
    //             transform: 'translate3d(0, 0, 0)',
    //         },
    //     },
    // },
    //
    // descrTitle: {
    //     color:'#9299a2',
    //     marginTop:'7px',
    // },
});

class Main extends Component {
    render() {
        return (
            <main>
                <SectionSearchComp/>

                <SectionCardsComp/>

                <SectionMasonryComp/>

                <SectionPopularComp/>

                <SectionAgencysComp/>

                <SectionAllPropertyComp/>

                <SectionProposeComp/>

                <SectionBottomLinksComp/>
            </main>
        );
    };
};

export default compose(withStyles(styles), withWidth())(Main);
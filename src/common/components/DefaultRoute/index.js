/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */


import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';


import Header from '../../containers/Header';
import Footer from '../../containers/Footer';



const DefaultRoute = ({component: Component, isAuthenticated, alert, hideAlert, ...rest}) => (
    <Route {...rest} render={props => (
        <div>
            <Header/>
            <Component {...props} />
            <Footer/>
        </div>
    )}/>
);

DefaultRoute.propTypes = {
    children: PropTypes.node,
};

export default DefaultRoute;
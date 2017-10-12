/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import React from 'react';


import PrivateRoute from './containers/PrivateRoute'
import DefaultLayout from './containers/DefaultRoute'

import NoMatch from './components/NoMatch';
import Main from './components/Main';

const routes = [
    <DefaultLayout key="2" path="/" component={Main}/>,
    <DefaultLayout key="20" component={NoMatch}/>
];

export default routes;
/**
 * Created by aleksandr on 7/15/17.
 * moonion.com
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Theme from './theme';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider, connect} from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import {Route, Switch, Link} from 'react-router-dom';

import {ConnectedRouter, routerReducer, routerMiddleware, push, goBack} from 'react-router-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'


import CommonReducer from './common/reducers';
import UserReducer from './user/reducers';


import CommonRouters from './common';
import UserRouters from './user';

import {getCurrent as getCurrentUser} from './user/actions'

import 'normalize.css';



import Parse from 'parse';
import {PARSE_APP_ID, PARSE_SERVER_URL} from './common/constants';

Parse.serverURL = PARSE_SERVER_URL;
Parse.initialize(PARSE_APP_ID);


const history = qhistory(
    createHistory({ /* history configuration options */ }),
    stringify,
    parse
);

const AppReducer = combineReducers({
    common: CommonReducer,
    user: UserReducer,
    router: routerReducer
});


const store = createStore(AppReducer, undefined,
    composeWithDevTools(
        applyMiddleware(thunk, routerMiddleware(history)),
    ));


class Layout extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getCurrentUser();
    }

    render() {

        if (!this.props.load)
            return null;

        return <ConnectedRouter history={history}>
            <Switch>
                {UserRouters}
                {CommonRouters}
            </Switch>
        </ConnectedRouter>
    }
}

const LayoutRedux = connect(
    state => ({
        load: state.common.load || true
    }),
    dispatch => ({
        getCurrentUser: () => dispatch(getCurrentUser()),
    })
)(Layout);


ReactDOM.render(
    <Theme>
        <Provider store={store}>
            <LayoutRedux/>
        </Provider>
    </Theme>,
    document.getElementById('app')
);
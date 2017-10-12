import React from 'react';
import PrivateRoute from '../common/containers/PrivateRoute'
import DefaultLayout from '../common/containers/DefaultRoute'

import Sign from './containers/Sign';
import EmailVerification from './containers/EmailVerification';

const routes = [
  <DefaultLayout key="Sign" path="/user/sign/:type?" component={Sign} hideHeader/>,
  <DefaultLayout key="EmailVerification" path="/user/email-verification/:type" component={EmailVerification} hideHeader/>,
];

export default routes;

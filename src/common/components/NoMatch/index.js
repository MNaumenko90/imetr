/**
 * Created by aleksandr on 7/20/17.
 * moonion.com
 */

import React from 'react';
import PropTypes from 'prop-types';



const NoMatch = ({location, classes}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

NoMatch.propTypes = {
    children: PropTypes.node,
};

export default NoMatch;
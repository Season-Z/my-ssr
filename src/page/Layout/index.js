import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

function Layout(props) {
  return (
    <div>
      layout
      {renderRoutes(props.route.routes)}
    </div>
  );
}

Layout.propTypes = {};

export default Layout;

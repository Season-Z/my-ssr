import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotFound extends Component {

  render() {
    if (this.props.staticContext) {
      this.props.staticContext.notFound = true;
    }

    return <div>404</div>;
  }
}

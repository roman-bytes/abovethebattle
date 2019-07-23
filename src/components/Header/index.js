import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default class Header extends Component {
  render() {
    const { logo } = this.props;
    return (
      <div className="header">
        <a href="/" aria-label="Above the battle homepage">
          <Img sizes={logo} ariaHidden="true" />
        </a>
      </div>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.object
};

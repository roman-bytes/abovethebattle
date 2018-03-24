import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Menu from './Menu';

export default class Header extends Component {
  render() {
    const { logo } = this.props;
    return (
      <header>
        <Img sizes={logo} />
        <Menu />
      </header>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.object
};

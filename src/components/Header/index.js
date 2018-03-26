import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Menu from './Menu';

export default class Header extends Component {
  render() {
    const { logo } = this.props;
    return (
      <div className='header'>
        <Img sizes={logo} />
        <Menu />
      </div>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.object
};

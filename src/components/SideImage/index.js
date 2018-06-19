import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default class SideImage extends Component {
  render() {
    const { image } = this.props;
    const style = {
      background: `url(${image.src})`,
      backgroundSize: 'cover'
    };
    return (
      <div id='side-image' style={style} />
    );
  }
}

SideImage.propTypes = {
  image: PropTypes.object.isRequired
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default class SideImage extends Component {
  render() {
    const { image } = this.props;
    return (
      <div id='side-image'>
        <Img sizes={image} />
      </div>
    );
  }
}

SideImage.propTypes = {
  image: PropTypes.object.isRequired
};

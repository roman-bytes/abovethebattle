import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

export default class BlogPost extends Component {
  render() {
    const { node } = this.props;
    const featImage = node.featuredImage ? node.featuredImage.file.url : '';
    return (
      <div>
        <h3><Link to={node.slug}>{node.title}</Link></h3>
        <p>{node.createdAt}</p>
        <div>
          <div>
            <img src={featImage}/>
          </div>
          <div>{node.content.childMarkdownRemark.excerpt}</div>
        </div>
      </div>
    );
  }
}

BlogPost.propTypes = {
  node: PropTypes.object
};
